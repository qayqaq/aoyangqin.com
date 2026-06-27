import { ui, defaultLang, type Lang } from '../config';

/** Extract the locale from a URL pathname. `/zh/...` → zh, else default. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'zh' ? 'zh' : defaultLang;
}

/** Returns a translator bound to `lang`, falling back to the default language. */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}

/**
 * Build a localized path. `en` lives at root, `zh` is prefixed with /zh.
 * `path` is locale-agnostic and should start with `/` (e.g. "/blog").
 */
export function localizedPath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return lang === defaultLang ? clean || '/' : `/zh${clean}`;
}

/**
 * Swap the locale prefix on the *current* pathname, keeping the same page.
 * Used by the language toggle for non-post pages.
 */
export function swapLocalePath(pathname: string, target: Lang): string {
  // Normalize to a locale-agnostic path first.
  let base = pathname;
  if (base === '/zh' || base === '/zh/') base = '/';
  else if (base.startsWith('/zh/')) base = base.slice(3);
  return localizedPath(base, target);
}

/** Format a date according to locale conventions. */
export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: lang === 'zh' ? 'long' : 'short',
    day: 'numeric',
  }).format(date);
}
