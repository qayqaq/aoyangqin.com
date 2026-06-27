// ---------------------------------------------------------------------------
// Normalize Obsidian-flavoured display math so it is valid CommonMark.
//
// Obsidian renders any `$$...$$` as display math and is lenient about block
// structure. micromark / remark-math are strict, and two patterns break:
//
//   1. A multiline `$$` block opened inside a `>` blockquote/callout whose
//      continuation + closing lines drop the `>` prefix. CommonMark ends the
//      blockquote, leaving an unbalanced `$$` that swallows later content.
//
//   2. A multiline block whose opening `$$` has content on the SAME line
//      (`$$\begin{aligned}...`). micromark treats everything after `$$` on
//      that line as the fence "info string" and discards it, corrupting the
//      math.
//
// This script rewrites every MULTILINE `$$` block to the canonical form:
//
//      $$
//      <body…>            (each line `>`-prefixed if the block opened in a quote)
//      $$
//
// Single-line `$$a=b$$` is left untouched — the render-time remark plugin
// (src/lib/remark-obsidian-math.mjs) promotes those to display math.
//
// Idempotent: running it twice is a no-op. Safe to run on new posts.
//
// Usage:  npm run normalize            (all of src/content/blog)
//         node scripts/normalize-md.mjs path/to/file.md ...
// ---------------------------------------------------------------------------
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BLOG = path.join(ROOT, 'src/content/blog');

/** Count non-overlapping `$$` occurrences in a line. */
function countDD(line) {
  return (line.match(/\$\$/g) || []).length;
}

/** Split a line into its blockquote prefix (`> ` repeated) and the rest. */
function splitQuote(line) {
  const m = line.match(/^(\s*(?:>\s?)+)/);
  return m ? [m[1], line.slice(m[1].length)] : ['', line];
}

/**
 * Rewrite all multiline `$$` blocks in `text` to canonical form, iterating to
 * a fixed point. A single pass only rebalances the FIRST block in a run of
 * adjacent blocks (splitting it shifts the `$$` parity for everything after),
 * so we repeat until the output stops changing. Converges quickly; capped to
 * avoid any pathological oscillation.
 */
export function normalizeMath(text) {
  let prev = text;
  for (let i = 0; i < 20; i++) {
    const next = normalizeMathOnce(prev);
    if (next === prev) return next;
    prev = next;
  }
  return prev;
}

/** One normalization pass (line-based state machine over `$$` blocks). */
function normalizeMathOnce(text) {
  const lines = text.split('\n');
  const out = [];

  let inBlock = false;
  let Q = ''; // blockquote prefix the active block opened with

  const pushQuoted = (prefix, content) => {
    const c = content ?? '';
    if (prefix && c.trim() === '') out.push(prefix.trimEnd());
    else out.push(prefix + c);
  };

  for (const raw of lines) {
    if (!inBlock) {
      const [q, content] = splitQuote(raw);
      // Even count → balanced on this line (inline / single-line $$…$$): leave.
      if (countDD(content) % 2 === 0) {
        out.push(raw);
        continue;
      }
      // Odd count → this line OPENS a multiline block at its last `$$`.
      const i = content.lastIndexOf('$$');
      const head = content.slice(0, i);
      const tail = content.slice(i + 2);
      if (head.trim() !== '') pushQuoted(q, head.trimEnd());
      out.push(q + '$$');
      if (tail.trim() !== '') pushQuoted(q, tail.trimStart());
      inBlock = true;
      Q = q;
    } else {
      // Inside a block. Strip the line's own quote prefix; re-apply Q.
      const [, content] = splitQuote(raw);
      const j = content.indexOf('$$');
      if (j === -1) {
        // Pure body line.
        pushQuoted(Q, content);
      } else {
        // Closing delimiter (first `$$`).
        const pre = content.slice(0, j);
        const post = content.slice(j + 2);
        if (pre.trim() !== '') pushQuoted(Q, pre.trimEnd());
        out.push(Q + '$$');
        if (post.trim() !== '') pushQuoted(Q, post.trimStart());
        inBlock = false;
        Q = '';
      }
    }
  }

  return out.join('\n');
}

// --- CLI -------------------------------------------------------------------

function* walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) yield* walk(full);
    else if (name.endsWith('.md')) yield full;
  }
}

// Only run the file-rewriting CLI when invoked directly, not when imported.
const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const args = process.argv.slice(2);
  const targets = args.length ? args : [...walk(BLOG)];

  let changed = 0;
  for (const file of targets) {
    const before = fs.readFileSync(file, 'utf8');
    const after = normalizeMath(before);
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8');
      changed++;
      console.log(`  normalized  ${path.relative(ROOT, file)}`);
    }
  }
  console.log(`\nNormalized ${changed} file(s) of ${targets.length}.`);
}

