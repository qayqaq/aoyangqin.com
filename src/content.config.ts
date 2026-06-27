import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  // Each language lives in its own subfolder: src/content/blog/{en,zh}/*.md
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    lang: z.enum(['en', 'zh']),
    // Links the EN and ZH versions of the same article together.
    translationKey: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    summary: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
