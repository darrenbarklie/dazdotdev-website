import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import solidJs from "@astrojs/solid-js";

import remarkToc from "remark-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// https://astro.build/config
export default defineConfig({
  server: { port: 7777, host: true },
  markdown: {
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeAutolinkHeadings],
  },
  integrations: [
    mdx({
      remarkPlugins: [remarkToc],
      rehypePlugins: [rehypeAutolinkHeadings],
    }),
    tailwind(),
    solidJs(),
  ],
});
