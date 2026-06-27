import rss from '@astrojs/rss';
import { SITE } from '../config';
import { getPosts, postPath } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary ?? '',
      link: postPath(post),
      categories: post.data.tags,
    })),
  });
}
