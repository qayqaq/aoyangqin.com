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
// Bio shown on the home page. Intentionally NOT language-switched — it stays
// in English on both the en and zh homepages. Supports **bold** and
// [text](url) markdown.
export const BIO = `I'm **Aoyang Qin** (秦傲洋), a fourth-year Ph.D. student at Tsinghua University, advised by Dr. [Sirui Xie](https://siruixie.com/) and Prof. [Song-Chun Zhu](http://www.stat.ucla.edu/~sczhu/). I'm widely interested in fundamental problems in AI and Machine Learning, including Generative Modeling, Representation Learning and Decision-Making. I co-founded [PicWiz](https://picwiz.com/). I'm currently focusing on building large-scale video generative model and honored to have an internship for training [vidu](https://www.vidu.cn/) at [Shengshu](https://www.genspi.com/en/).`;

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
