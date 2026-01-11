import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

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
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["@webtui/css"],
    },
  },
});
