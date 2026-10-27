import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default('Antonio Urdaneta'),
    // Webflow exposed no publish dates; `order` preserves the original newest-first listing.
    order: z.number(),
    image: z.string().optional(),
  }),
});

export const collections = { posts };
