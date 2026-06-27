// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import { remarkObsidian } from './src/lib/remark-obsidian.mjs';
import { remarkMathForMathjax } from './src/lib/remark-math-mathjax.mjs';

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
    remarkPlugins: [remarkObsidian, remarkMath, remarkMathForMathjax],
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
