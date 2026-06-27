import { visit } from 'unist-util-visit';

/**
 * remark plugin that translates the Obsidian-flavoured Markdown used in the
 * old digital-garden vault into web-renderable mdast:
 *
 *   - Callouts:   `> [!type] Title` blockquotes  ->  <blockquote class="callout callout-type">
 *   - Highlight:  `==text==`                      ->  <mark>text</mark>
 *   - Wikilinks:  `[[target|alias]]` left over    ->  plain alias text (safety net;
 *                 the migration script rewrites real links to proper URLs)
 *
 * Math ($...$ / $$...$$) is intentionally left untouched for remark-math.
 */
export function remarkObsidian() {
  return (tree) => {
    transformCallouts(tree);
    transformInlineText(tree);
  };
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function transformCallouts(tree) {
  visit(tree, 'blockquote', (node) => {
    const first = node.children?.[0];
    if (!first || first.type !== 'paragraph') return;
    const firstText = first.children?.[0];
    if (!firstText || firstText.type !== 'text') return;

    const value = firstText.value;
    const nl = value.indexOf('\n');
    const firstLine = nl === -1 ? value : value.slice(0, nl);
    const rest = nl === -1 ? '' : value.slice(nl + 1);

    const m = /^\[!([A-Za-z]+)\]([+-]?)\s*(.*)$/.exec(firstLine);
    if (!m) return;

    const type = m[1].toLowerCase();
    const title = m[3].trim() || capitalize(type);

    // Keep any text that followed the marker on the same logical paragraph.
    firstText.value = rest;
    if (!rest && first.children.length === 1) {
      node.children.shift(); // drop the now-empty lead paragraph
    }

    node.data = node.data || {};
    node.data.hProperties = {
      className: ['callout', `callout-${type}`],
      'data-callout': type,
    };

    node.children.unshift({
      type: 'paragraph',
      data: { hProperties: { className: ['callout-title'] } },
      children: [{ type: 'text', value: title }],
    });
  });
}

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function transformInlineText(tree) {
  visit(tree, 'text', (node, index, parent) => {
    if (!parent || index === null || index === undefined) return;
    const value = node.value;
    if (!value.includes('==') && !value.includes('[[')) return;

    // First strip any leftover wikilinks down to their alias / target text.
    const stripped = value.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
      const parts = inner.split('|');
      return (parts[1] ?? parts[0]).trim();
    });

    if (!stripped.includes('==')) {
      node.value = stripped;
      return;
    }

    const segments = stripped.split(/==([^=]+)==/g);
    if (segments.length === 1) {
      node.value = stripped;
      return;
    }

    const newNodes = [];
    segments.forEach((seg, i) => {
      if (i % 2 === 1) {
        newNodes.push({ type: 'html', value: `<mark>${escapeHtml(seg)}</mark>` });
      } else if (seg) {
        newNodes.push({ type: 'text', value: seg });
      }
    });
    parent.children.splice(index, 1, ...newNodes);
  });
}
