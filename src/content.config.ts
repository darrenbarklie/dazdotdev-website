import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    categories: z.array(z.string()).optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/work" }),
  schema: z.object({
    id: z.string(),
    client: z.string(),
    date: z.string(),
    location: z.string(),
    tech: z.array(z.string()).optional(),
    roles: z.array(z.string()).optional(),
    urls: z.array(z.string()).optional(),
    blurb: z.string(),
  }),
});

const bookmarks = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/bookmarks" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    source_name: z.string(),
    source_url: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, work, bookmarks };
