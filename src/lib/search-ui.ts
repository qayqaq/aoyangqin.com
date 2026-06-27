// ---------------------------------------------------------------------------
// Wires the header search button to the Pagefind modal. Pagefind's UI bundle
// is generated at build time into /pagefind/ (see `pagefind --site dist`),
// so it does not exist during `astro dev`. We therefore load it lazily and
// degrade gracefully when it is absent.
// ---------------------------------------------------------------------------

interface PagefindUIOptions {
  element: string;
  showSubResults?: boolean;
  showImages?: boolean;
  translations?: Record<string, string>;
  pageSize?: number;
}

declare global {
  interface Window {
    PagefindUI?: new (opts: PagefindUIOptions) => unknown;
  }
}

export function initSearch(): void {
  const trigger = document.getElementById('search-trigger');
  const modal = document.getElementById('search-modal');
  if (!trigger || !modal) return;

  const lang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
  let loaded = false;

  function open() {
    modal!.hidden = false;
    document.body.style.overflow = 'hidden';
    void ensureLoaded();
    setTimeout(() => {
      modal!.querySelector<HTMLInputElement>('input')?.focus();
    }, 80);
  }

  function close() {
    modal!.hidden = true;
    document.body.style.overflow = '';
  }

  async function ensureLoaded() {
    if (loaded) return;
    loaded = true;
    const mount = document.getElementById('search-ui');
    if (!mount) return;
    try {
      // Pagefind UI JS is emitted by `pagefind --site dist` AFTER astro build,
      // so it cannot be resolved at bundle time. The non-literal path + the
      // @vite-ignore hint keep Rollup from trying to resolve it.
      const base = import.meta.env.BASE_URL;
      // Load the matching stylesheet (the JS bundle does not inject it).
      if (!document.querySelector('link[data-pagefind-ui]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = `${base}pagefind/pagefind-ui.css`;
        link.setAttribute('data-pagefind-ui', '');
        document.head.appendChild(link);
      }
      const url = `${base}pagefind/pagefind-ui.js`;
      // @ts-expect-error - generated at build, no types available
      await import(/* @vite-ignore */ url);
      if (!window.PagefindUI) throw new Error('PagefindUI missing');
      new window.PagefindUI({
        element: '#search-ui',
        showSubResults: true,
        showImages: false,
        pageSize: 5,
        translations:
          lang === 'zh'
            ? {
                placeholder: '搜索文章…',
                zero_results: '没有找到 "[SEARCH_TERM]" 的结果',
              }
            : { placeholder: 'Search posts…' },
      });
    } catch {
      mount.innerHTML =
        lang === 'zh'
          ? '<p class="search-fallback">搜索索引在开发模式下不可用。请运行构建后预览。</p>'
          : '<p class="search-fallback">Search index is only available in a production build (run <code>npm run build</code> then <code>npm run preview</code>).</p>';
    }
  }

  trigger.addEventListener('click', open);

  modal.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.dataset.close !== undefined) close();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal.hidden ? open() : close();
    } else if (e.key === 'Escape' && !modal.hidden) {
      close();
    }
  });
}
