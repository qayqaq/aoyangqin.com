import { visit } from 'unist-util-visit';

/**
 * Obsidian renders ANY `$$...$$` as display math, including the single-line
 * form `$$a = b$$`. remark-math, however, only emits a display `math` node for
 * the *fenced* form (`$$` alone on its own line); a single-line `$$a=b$$` comes
 * through as an `inlineMath` node — visually identical to `$a=b$`.
 *
 * This plugin runs AFTER remark-math. It inspects the raw source span of every
 * `inlineMath` node and, when the original delimiter was `$$`, rewrites the node
 * into a display `math` node so rehype-katex renders it centered/blocky — the
 * Obsidian behaviour. It then splits the containing paragraph so the resulting
 * block element is not nested inside a `<p>` (which is invalid HTML).
 *
 * Requires `remark-rehype` to be configured so block `math` nodes become block
 * elements; we mark converted nodes so the paragraph-splitter can find them.
 */
export function remarkObsidianMath() {
  return (tree, file) => {
    const src = String(file.value ?? '');

    // Pass 1: promote `$$`-delimited inlineMath -> display math (in place).
    // We set the hast output explicitly (hName/hProperties/hChildren) so that
    // rehype-katex sees a `math-display` element regardless of how the default
    // mdast->hast handler would have dispatched the (mutated) node type.
    visit(tree, 'inlineMath', (node) => {
      const pos = node.position;
      if (!pos || pos.start.offset == null || pos.end.offset == null) return;
      const raw = src.slice(pos.start.offset, pos.end.offset);
      if (raw.startsWith('$$') && raw.endsWith('$$') && raw.length >= 4) {
        node.type = 'math';
        node.data = {
          hName: 'div',
          hProperties: { className: ['math', 'math-display'] },
          hChildren: [{ type: 'text', value: node.value }],
        };
      }
    });

    // Pass 2: any paragraph that now contains a display `math` node must be
    // split, because block math cannot live inside <p>. We break the paragraph
    // into a sequence of paragraphs (for inline runs) and bare math nodes.
    visit(tree, 'paragraph', (node, index, parent) => {
      if (!parent || index == null) return;
      const hasBlockMath = node.children.some((c) => c.type === 'math');
      if (!hasBlockMath) return;

      const out = [];
      let run = [];
      const flush = () => {
        // Trim leading/trailing whitespace-only text nodes from the run.
        while (run.length && isBlankText(run[0])) run.shift();
        while (run.length && isBlankText(run[run.length - 1])) run.pop();
        if (run.length) out.push({ type: 'paragraph', children: run });
        run = [];
      };
      for (const child of node.children) {
        if (child.type === 'math') {
          flush();
          out.push(child);
        } else {
          run.push(child);
        }
      }
      flush();
      parent.children.splice(index, 1, ...out);
      return index + out.length; // continue after the inserted nodes
    });
  };
}

function isBlankText(node) {
  return (
    (node.type === 'text' && /^\s*$/.test(node.value)) ||
    node.type === 'break'
  );
}
