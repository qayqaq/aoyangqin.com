// ---------------------------------------------------------------------------
// One-time migration: Obsidian digital-garden notes  ->  Astro content.
//
// Reads markdown from the old repo (default ../repo/src/site/notes), strips the
// digital-garden JSON frontmatter, derives title/date/lang, converts a few
// Obsidian-isms that the render-time remark plugin does NOT handle (inline
// #tags, .canvas wikilinks, image paths), and writes clean files into
// src/content/blog/{en,zh}/ with YAML frontmatter.
//
// Callouts (> [!note]), ==highlight==, $math$ and wikilinks-to-posts are left
// intact — src/lib/remark-obsidian.mjs handles those when the site renders.
//
// Usage:  npm run migrate           (uses ../repo)
//         npm run migrate -- /path/to/old/notes /path/to/old/images
// ---------------------------------------------------------------------------
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeMath } from './normalize-md.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..'); // the site/ dir

const SRC_NOTES = path.resolve(ROOT, process.argv[2] || '../repo/src/site/notes');
const SRC_IMG = path.resolve(
  ROOT,
  process.argv[3] || '../repo/src/site/img/user/Assets/Images',
);
const OUT = {
  en: path.join(ROOT, 'src/content/blog/en'),
  zh: path.join(ROOT, 'src/content/blog/zh'),
};
const OUT_IMG = path.join(ROOT, 'public/images');

// Per-article metadata, keyed by source filename (without `.md`). Everything
// here is editable; title/date/lang are derived automatically below.
const META = {
  'Quantum Chaos': {
    draft: true,
    category: 'Notes',
    tags: ['quantum-mechanics', 'chaos', 'physics'],
  },
  'Computer Network - From Notes to the Web': {
    category: 'Blog',
    tags: ['web', 'tools', 'obsidian'],
    summary:
      'How my notes travel from screen to web — Obsidian, GitHub, Vercel and Cloudflare, with the scary internet jargon decoded.',
  },
  'A Journey Through Statistical Mechanics': {
    category: 'Blog',
    tags: ['physics', 'statistical-mechanics'],
    translationKey: 'stat-mech',
    summary:
      'From a single fundamental assumption to Bose–Einstein condensation: retracing the path from microscopic counting to macroscopic prediction.',
  },
  'Fundamentals of Quantum Computing': {
    category: 'Quantum Computing',
    tags: ['quantum-computing'],
    summary:
      'Classical gates, reversible computing and the building blocks that quantum computation is built upon.',
  },
  'Measurement, Protocols, Circuits': {
    category: 'Quantum Computing',
    tags: ['quantum-computing'],
    summary:
      'Quantum measurement, core protocols and the circuit model of quantum computation.',
  },
  'What Happens When Magnet Attracts Metal?': {
    category: 'Blog',
    tags: ['physics', 'electromagnetism'],
    translationKey: 'magnet',
    summary:
      'If the Lorentz force does no work, what actually pulls a magnet toward metal? Resolving the paradox of the "lazy" force.',
  },
  'A Journey Through Classical Mechanics': {
    category: 'Blog',
    tags: ['physics', 'classical-mechanics'],
    summary:
      'Hamiltonian mechanics, phase space and differential forms — the modern skeleton of classical physics.',
  },
  '磁铁吸引金属时发生了什么？': {
    category: 'Blog',
    tags: ['物理', '电磁学'],
    translationKey: 'magnet',
    summary:
      '如果洛伦兹力不做功，到底是什么把磁铁拉向金属？破解“懒惰”的洛伦兹力之悖论。',
  },
  '一次统计力学之旅': {
    category: 'Blog',
    tags: ['物理', '统计力学'],
    translationKey: 'stat-mech',
    summary:
      '从一条基本假设出发，直到玻色–爱因斯坦凝聚：重走从微观计数到宏观预测的旅程。',
  },
};

// --- helpers ---------------------------------------------------------------

const hasCJK = (s) => /[一-鿿]/.test(s);

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')   // drop punctuation
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

/** Walk a directory tree and yield every .md file path. */
function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.md')) out.push(full);
  }
  return out;
}

/** Pull a `Notes/YYYY/MM/DD/...` date out of a path; null if absent. */
function dateFromPath(p) {
  const m = p.match(/(\d{4})[/\\](\d{2})[/\\](\d{2})[/\\]/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

/** YAML-escape a scalar (wrap in double quotes, escape inner quotes). */
function yaml(v) {
  if (Array.isArray(v)) return `[${v.map((x) => yaml(x)).join(', ')}]`;
  if (typeof v === 'boolean') return String(v);
  return `"${String(v).replace(/"/g, '\\"')}"`;
}

/**
 * Body transforms for things the render-time plugin can't see:
 *  - hoist inline `#tag #tag` lines into frontmatter, then strip them
 *  - drop `.canvas` wikilinks (no canvas support)
 *  - rewrite image src `/img/user/Assets/Images/x.png` -> `/images/x.png`
 *    and strip Obsidian's `|WxH` size hint from the alt text
 *  - copy the referenced images across
 */
function transformBody(body, collectedTags, usedImages) {
  let out = body;

  // Hoist standalone hashtag lines (e.g. "#quantum #chaos") into tags.
  out = out.replace(/^[ \t]*((?:#[\w-]+[ \t]*)+)$/gm, (line) => {
    for (const m of line.matchAll(/#([\w-]+)/g)) collectedTags.add(m[1]);
    return '';
  });

  // Remove .canvas wikilinks entirely.
  out = out.replace(/\[\[[^\]]*\.canvas[^\]]*\]\]/g, '');

  // Obsidian block-anchor artifacts `{ #id}` are link metadata that never
  // render. One leaked inside an integration-by-parts math block where it
  // mangled the upper limit `^b` of a boundary term `[…]_a^b`; repair that
  // specific spot, then strip any remaining standalone anchors.
  out = out.replace(/(\\right\|_a)\s*\n\{ *#b *\}/g, '$1^b');
  out = out.replace(/^[ \t]*\{ *#[\w-]+ *\}[ \t]*$/gm, '');

  // Images: ![alt|WxH](/img/user/Assets/Images/file.png) -> ![alt](/images/file.png)
  out = out.replace(
    /!\[([^\]]*)\]\((?:\/img\/user\/Assets\/Images\/)([^)]+)\)/g,
    (_all, alt, file) => {
      const clean = decodeURIComponent(file).trim();
      usedImages.add(clean);
      const altText = alt.replace(/\|.*$/, ''); // drop |WxH
      return `![${altText}](/images/${encodeURIComponent(clean)})`;
    },
  );

  // Collapse blank-line runs first, THEN canonicalize multiline $$ blocks so
  // nothing downstream can un-normalize them (the render pipeline is strict).
  out = out.replace(/\n{3,}/g, '\n\n');
  out = normalizeMath(out);
  return out.trim() + '\n';
}

/** Strip the digital-garden JSON frontmatter block; return the body. */
function stripFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  return m ? raw.slice(m[0].length) : raw;
}

/** Resolve per-file derived metadata. */
function deriveMeta(file) {
  const base = path.basename(file, '.md');
  const lang = hasCJK(base) ? 'zh' : 'en';
  const date = dateFromPath(file) || '2025-01-01';
  const override = META[base] || {};
  // Slug: English from title; zh prefers translationKey for symmetry.
  let slug = slugify(base);
  if (lang === 'zh') slug = override.translationKey || slug || `post-${date}`;
  if (!slug) slug = `post-${date}`;
  return { base, lang, date, slug, override };
}

// --- main ------------------------------------------------------------------

const files = walk(SRC_NOTES).filter(
  (f) => path.basename(f) !== 'Home.md',
);

// Pass 1: build a map from source basename -> { lang, slug } for wikilinks.
const linkMap = new Map();
const derived = files.map((file) => {
  const d = deriveMeta(file);
  linkMap.set(d.base, { lang: d.lang, slug: d.slug });
  return { file, ...d };
});

/** Convert [[target|alias]] / [[target]] into markdown links when the target
 *  is a known post; otherwise fall back to the alias as plain text. */
function convertWikilinks(body) {
  return body.replace(/\[\[([^\]]+)\]\]/g, (_all, inner) => {
    const [rawTarget, rawAlias] = inner.split('|');
    const alias = (rawAlias ?? rawTarget).trim();
    const target = path.basename(rawTarget.trim()); // last path segment
    const hit = linkMap.get(target);
    if (!hit) return alias; // unknown target -> plain text
    const prefix = hit.lang === 'zh' ? '/zh' : '';
    return `[${alias}](${prefix}/blog/${hit.slug})`;
  });
}

// Ensure output dirs exist.
for (const dir of [OUT.en, OUT.zh, OUT_IMG]) {
  fs.mkdirSync(dir, { recursive: true });
}

const usedImages = new Set();
let count = 0;

for (const { file, base, lang, date, slug, override } of derived) {
  const raw = fs.readFileSync(file, 'utf8');
  let body = stripFrontmatter(raw);

  const collectedTags = new Set(override.tags || []);
  body = transformBody(body, collectedTags, usedImages);
  body = convertWikilinks(body);

  const fm = {
    title: override.title || base,
    date,
    lang,
    ...(override.updated ? { updated: override.updated } : {}),
    ...(override.translationKey
      ? { translationKey: override.translationKey }
      : {}),
    tags: [...collectedTags],
    ...(override.category ? { category: override.category } : {}),
    ...(override.summary ? { summary: override.summary } : {}),
    ...(override.draft ? { draft: true } : {}),
  };

  const yamlLines = Object.entries(fm)
    .map(([k, v]) => `${k}: ${yaml(v)}`)
    .join('\n');
  const outPath = path.join(OUT[lang], `${slug}.md`);
  fs.writeFileSync(outPath, `---\n${yamlLines}\n---\n\n${body}`, 'utf8');
  count++;
  console.log(`  ${lang}  ${base}  ->  ${path.relative(ROOT, outPath)}`);
}

// Copy referenced images.
let imgCount = 0;
for (const img of usedImages) {
  const from = path.join(SRC_IMG, img);
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, path.join(OUT_IMG, img));
    imgCount++;
  } else {
    console.warn(`  ! missing image: ${img}`);
  }
}

console.log(`\nMigrated ${count} posts, copied ${imgCount} images.`);

