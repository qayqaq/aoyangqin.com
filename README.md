# aoyangqin.com

Personal homepage and blog of Aoyang Qin — [aoyangqin.com](https://aoyangqin.com).

Built with [Astro](https://astro.build): bilingual (English / 中文), math via MathJax,
full-text search via Pagefind, dark mode, RSS. Source lives in `site/`.

---

## Writing a new post — the short version

A post is just a Markdown file. To publish:

1. Create `site/src/content/blog/en/<slug>.md` (and optionally the Chinese
   counterpart `site/src/content/blog/zh/<slug>.md`).
2. Fill in the frontmatter + write Markdown (see below).
3. `git add . && git commit -m "..." && git push`.

That's it. Pushing to `main` triggers Vercel to build and deploy automatically;
the live site (aoyangqin.com) updates in ~1 minute. **No CLI, no manual steps.**

The filename is the URL slug:
`en/attention.md` → `/blog/attention`, `zh/attention.md` → `/zh/blog/attention`.

---

## Frontmatter

```markdown
---
title: "What Is Attention, Really?"
date: 2026-06-28              # decides ordering (newest first)
lang: en                     # en | zh
translationKey: attention    # optional — same key on en+zh links them (lang toggle)
tags: [machine-learning, transformers]
category: Blog               # optional — groups a series
summary: "One-line hook shown on home/blog cards. Supports $math$."
draft: false                 # optional — true hides it from the published site
---

Body starts here. Plain Markdown.

## A section

Inline math $E = mc^2$, display math:
$$
\hat{H}\psi = E\psi
$$
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✓ | |
| `date` | ✓ | Sort key; newer = higher |
| `lang` | ✓ | `en` or `zh` |
| `translationKey` | — | Same value on the en + zh files pairs them for the language toggle |
| `tags` | — | Array; each becomes a `/tags/<tag>` page |
| `category` | — | Free-form; used to group series |
| `summary` | — | Card excerpt; `$...$` math renders |
| `draft` | — | `true` = visible locally, hidden in production |

## Math

- Inline: `$...$`. Display: `$$...$$`. Write plain LaTeX; MathJax renders it
  client-side (CHTML).
- **Numbered equations + cross-references** work like LaTeX:
  ```markdown
  $$\begin{equation}\label{eq:el}
  \frac{\partial L}{\partial q} - \frac{d}{dt}\frac{\partial L}{\partial \dot q} = 0
  \end{equation}$$

  As shown in \eqref{eq:el}, ...
  ```
  The equation gets a `(1)` on the right; `\eqref{eq:el}` becomes a clickable
  link that jumps to it.
- If you paste a multi-line `$$ ... $$` block from Obsidian (where the `$$` may
  share a line with content, or sit inside a `>` callout), run
  `npm run normalize` once before committing — it canonicalizes such blocks so
  the strict Markdown parser renders them correctly. (Plain single-line
  `$$a=b$$` needs nothing.)

## Writing a series

For a multi-part series (like the Magnetism or Classical Mechanics posts):

- Name files `topic-1.md`, `topic-2.md`, … (slugs `/blog/topic-1`, etc.).
- Give every part the same `category` (e.g. `"Magnetism Series"`) so they group.
- Open each part with a `>` blockquote that previews/recaps and links siblings:
  `[Part 2](/blog/topic-2)` (en), `[第（二）篇](/zh/blog/topic-2)` (zh).
- Close non-final parts with `*To be continued.*` / `**未完待续。**`.
- Pair en/zh per part via a shared `translationKey` (e.g. `topic-2`).

## Local preview

```bash
cd site
npm install        # first time only
npm run dev        # http://localhost:4321 — live reload as you edit
```

Note: search is disabled in `dev` (the index is built only by `npm run build`).
To preview the real production output including search:

```bash
npm run build && npm run preview
```

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with live reload |
| `npm run build` | Production build (`astro build` + Pagefind search index) |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run normalize` | Canonicalize Obsidian-style `$$` math blocks in content |

## Deployment

Hosted on Vercel, connected to this GitHub repo. **Every push to `main`
auto-deploys** to aoyangqin.com. Pull requests get preview URLs.

To deploy manually instead (no GitHub needed):

```bash
cd site
vercel --prod
```

## Project layout

```
site/
├── src/
│   ├── content/blog/{en,zh}/   # ← your posts live here
│   ├── components/             # PostCard, Header, views, etc.
│   ├── layouts/                # BaseLayout (head, MathJax), PostLayout
│   ├── pages/                  # routes (en at /, zh at /zh/)
│   ├── lib/                    # i18n, post helpers, remark plugins
│   ├── styles/global.css       # the whole theme
│   └── config.ts               # site title, bio, nav, UI strings, Giscus
├── scripts/                    # migrate.mjs, normalize-md.mjs
└── public/                     # favicon, images
```

## Configuration

Edit `site/src/config.ts` for: site title/description, the home-page bio,
nav links, UI strings, and Giscus comments (fill in the repo IDs from
[giscus.app](https://giscus.app) to enable comments).



