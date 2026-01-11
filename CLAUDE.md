# CLAUDE.md - Project Instructions for Claude Code

## Project Overview
Personal portfolio and blog for daz.dev - a full-stack TypeScript developer's website.

## Tech Stack
- **Framework**: Astro v5 with Content Collections
- **Styling**: Tailwind CSS v4 (CSS-first config)
- **Interactive**: SolidJS for client-side components
- **Content**: MDX with remark/rehype plugins
- **Package Manager**: bun
- **Deployment**: Vercel

## Commands
```bash
bun install          # Install dependencies
bun run dev          # Start dev server (port 7777)
bun run build        # Production build
bun run preview      # Preview production build
```

## Project Structure
```
src/
├── content/           # Content Collections (MDX)
│   ├── blog/          # Blog posts
│   ├── work/          # Portfolio items
│   └── bookmarks/     # Curated resources
├── pages/             # Route pages
│   ├── blog/[...slug].astro
│   ├── work/[...slug].astro
│   └── bookmarks/[...slug].astro
├── components/        # UI components
│   ├── _globals/      # Header, footer, layout parts
│   ├── blog/          # Blog-specific components
│   ├── work/          # Work-specific components
│   └── solid/         # SolidJS interactive components
├── layouts/           # Page layouts
└── styles/
    └── base.css       # Tailwind config (@theme, @layer)
```

## Content Collections
Schemas defined in `src/content.config.ts`:
- **blog**: title, description, date, categories[]
- **work**: id, client, date, location, tech[], roles[], urls[], blurb
- **bookmarks**: id, title, source_name, source_url, description, tags[]

## Key Files
- `astro.config.mjs` - Astro + Vite config
- `src/content.config.ts` - Collection schemas (Zod)
- `src/styles/base.css` - Tailwind v4 theme + components
- `vercel.json` - Deployment config (bun, redirects)

## Development Notes
- Content uses MDX - can import components in markdown
- Tailwind v4 uses CSS-first config (@theme directive)
- SolidJS components use `client:load` directive in Astro
- Old blog URLs have redirects configured in vercel.json
