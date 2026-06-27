// ---------------------------------------------------------------------------
// Site-wide configuration. Edit these values to personalize the site.
// ---------------------------------------------------------------------------

export type Lang = 'en' | 'zh';
export const locales: Lang[] = ['en', 'zh'];
export const defaultLang: Lang = 'en';

export const SITE = {
  title: 'Aoyang Qin',
  description: 'Notes and essays on AI, ML, and physics.',
  author: 'Aoyang Qin',
  // Deployed origin (mirror this in astro.config.mjs `site`).
  url: 'https://www.aoyangqin.com',
  social: {
    github: 'https://github.com/qayqaq',
    email: '', // e.g. 'you@example.com' — leave '' to hide
  },
};

// Short bio shown on the home page, per language. Markdown-ish plain text.
export const BIO = {
  en: `I'm **Aoyang Qin**, a PhD student working on AI and machine learning — generative modeling, decision making, and representation learning. I write notes and essays here on the things I'm learning, across ML and physics.`,
  zh: `我是**秦傲洋**，一名研究 AI 与机器学习的博士生，方向包括生成式建模、决策与表示学习。我在这里记录学习笔记与随笔，内容涵盖机器学习与物理。`,
};

// Top navigation. `key` resolves through the `ui` table below.
export const NAV: { href: string; key: keyof (typeof ui)['en'] }[] = [
  { href: '/blog', key: 'nav.blog' },
  { href: '/tags', key: 'nav.tags' },
  { href: '/archive', key: 'nav.archive' },
];

// Giscus comments. Fill in after enabling Giscus on a public GitHub repo
// at https://giscus.app. Leave `repo` empty to hide comments entirely.
export const giscus = {
  repo: '',
  repoId: '',
  category: 'Announcements',
  categoryId: '',
};

// ---------------------------------------------------------------------------
// UI strings. Flat dotted keys, looked up by useTranslations().
// ---------------------------------------------------------------------------
export const ui = {
  en: {
    'nav.blog': 'Blog',
    'nav.tags': 'Tags',
    'nav.archive': 'Archive',
    'search': 'Search',
    'search.label': 'Search posts',
    'search.placeholder': 'Search posts…',
    'toc.title': 'Contents',
    'toc.label': 'Table of contents',
    'home.recent': 'Recent posts',
    'home.all': 'All posts →',
    'blog.title': 'Writing',
    'archive.title': 'Archive',
    'tags.title': 'Tags',
    'tags.tagged': 'Posts tagged',
    'post.draft': 'Draft',
  },
  zh: {
    'nav.blog': '博客',
    'nav.tags': '标签',
    'nav.archive': '归档',
    'search': '搜索',
    'search.label': '搜索文章',
    'search.placeholder': '搜索文章…',
    'toc.title': '目录',
    'toc.label': '文章目录',
    'home.recent': '最近文章',
    'home.all': '全部文章 →',
    'blog.title': '文章',
    'archive.title': '归档',
    'tags.title': '标签',
    'tags.tagged': '标签',
    'post.draft': '草稿',
  },
} as const;
