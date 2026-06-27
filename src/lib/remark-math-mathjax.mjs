import { visit } from 'unist-util-visit';

/**
 * Prepares math for CLIENT-SIDE MathJax (loaded in BaseLayout) instead of
 * build-time KaTeX. We keep remark-math purely to *protect* TeX from the
 * markdown parser (so `_`, `\\`, `*`, `&` inside math aren't mangled), then
 * re-emit each math node as a plain element whose text content is the TeX
 * wrapped in MathJax delimiters:
 *
 *   inline  ($x$)                -> <span class="math math-inline">\(x\)</span>
 *   display ($$…$$ / fenced)     -> <div class="math math-display">$$…$$</div>
 *
 * The TeX is placed as a TEXT child (so rehype escapes <, >, &). MathJax reads
 * `textContent` (which un-escapes), so alignment `&`, `\\`, `<` all survive.
 *
 * Display delimiters are `$$…$$` (MathJax default) so that numbered AMS
 * environments written inside — \begin{equation}, \begin{align}, with
 * \label{} — are auto-numbered, and \eqref{}/\ref{} resolve to jump-links.
 * Single-line `$$a=b$$` (which remark-math emits as an inlineMath node) is
 * detected via its source span and promoted to display, matching Obsidian.
 */
export function remarkMathForMathjax() {
  return (tree, file) => {
    const src = String(file.value ?? '');

    const toDisplay = (node) => {
      node.data = {
        hName: 'div',
        hProperties: { className: ['math', 'math-display'] },
        hChildren: [{ type: 'text', value: `$$${node.value}$$` }],
      };
    };
    const toInline = (node) => {
      node.data = {
        hName: 'span',
        hProperties: { className: ['math', 'math-inline'] },
        hChildren: [{ type: 'text', value: `\\(${node.value}\\)` }],
      };
    };

    visit(tree, 'math', (node) => toDisplay(node));

    visit(tree, 'inlineMath', (node) => {
      const pos = node.position;
      const raw =
        pos && pos.start.offset != null && pos.end.offset != null
          ? src.slice(pos.start.offset, pos.end.offset)
          : '';
      if (raw.startsWith('$$') && raw.endsWith('$$') && raw.length >= 4) {
        toDisplay(node); // single-line $$…$$ → display (Obsidian behaviour)
      } else {
        toInline(node);
      }
    });

    // Display math becomes a <div>, which is invalid inside <p>. Split any
    // paragraph that now contains a display-math node into separate blocks.
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || index == null) return;
      const isDisplay = (c) =>
        c.type === 'math' ||
        (c.data && c.data.hProperties &&
          (c.data.hProperties.className || []).includes('math-display'));
      if (!node.children.some(isDisplay)) return;

      const out = [];
      let run = [];
      const flush = () => {
        while (run.length && isBlank(run[0])) run.shift();
        while (run.length && isBlank(run[run.length - 1])) run.pop();
        if (run.length) out.push({ type: 'paragraph', children: run });
        run = [];
      };
      for (const child of node.children) {
        if (isDisplay(child)) {
          flush();
          out.push(child);
        } else {
          run.push(child);
        }
      }
      flush();
      parent.children.splice(index, 1, ...out);
      return index + out.length;
    });
  };
}

function isBlank(n) {
  return (n.type === 'text' && /^\s*$/.test(n.value)) || n.type === 'break';
}
