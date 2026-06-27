import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../config';
import { localizedPath, formatDate } from './i18n';

export type Post = CollectionEntry<'blog'>;
export { formatDate };

const isProd = import.meta.env.PROD;

/** Language of a post, derived from its folder prefix (`en/…` or `zh/…`). */
export function postLang(post: Post): Lang {
  return post.id.startsWith('zh/') ? 'zh' : 'en';
}

/** Locale-agnostic slug (filename without the `lang/` prefix or extension). */
export function postSlug(post: Post): string {
  return post.id.replace(/^(en|zh)\//, '');
}

/** Full localized URL path for a post, e.g. `/blog/foo` or `/zh/blog/foo`. */
export function postPath(post: Post): string {
  return localizedPath(`/blog/${postSlug(post)}`, postLang(post));
}
/** Alias kept for components that import `postUrl`. */
export const postUrl = postPath;

/** All published posts for a language, newest first. Drafts hidden in prod. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data, id }) => {
    const inLang = id.startsWith(`${lang}/`);
    const visible = isProd ? data.draft !== true : true;
    return inLang && visible;
  });
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Group posts by their `category` field, preserving sort order. */
export function groupByCategory(posts: Post[]): Map<string, Post[]> {
  const map = new Map<string, Post[]>();
  for (const post of posts) {
    const cat = post.data.category ?? 'Blog';
    if (!map.has(cat)) map.set(cat, []);
    map.get(cat)!.push(post);
  }
  return map;
}

/** Collect tags with counts across the given posts, most frequent first. */
export function collectTags(posts: Post[]): Map<string, number> {
  const map = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags ?? []) {
      map.set(tag, (map.get(tag) ?? 0) + 1);
    }
  }
  return new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
}

/** Find the counterpart post in the other language via `translationKey`. */
export async function findTranslation(post: Post): Promise<Post | null> {
  if (!post.data.translationKey) return null;
  const otherLang: Lang = postLang(post) === 'zh' ? 'en' : 'zh';
  const all = await getCollection('blog');
  return (
    all.find(
      (p) =>
        p.id.startsWith(`${otherLang}/`) &&
        p.data.translationKey === post.data.translationKey,
    ) ?? null
  );
}
