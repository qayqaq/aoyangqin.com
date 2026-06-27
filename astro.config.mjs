// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkObsidian } from './src/lib/remark-obsidian.mjs';
import { remarkObsidianMath } from './src/lib/remark-obsidian-math.mjs';

// Update this to your production domain.
const SITE = 'https://www.aoyangqin.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false, // en at /, zh at /zh/
    },
  },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkObsidian, remarkMath, remarkObsidianMath],
    rehypePlugins: [[rehypeKatex, { strict: false, throwOnError: false }]],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
