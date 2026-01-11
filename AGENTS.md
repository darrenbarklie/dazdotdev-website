# IMPORTANT NOTE: Work Content Retention

The `src/content/work/` directory contains portfolio/work history items that should **NOT** be deleted. This content is retained for future use when the work section is republished.

## Work Content Location

- `src/content/work/` - Contains all work/portfolio items (MDX files)

## If Republishing Work Section

To republish the work section in the future:

1. Restore the work pages:
   - `src/pages/work/[...slug].astro`
   - `src/layouts/LayoutWork.astro`

2. Add back to navigation (`src/components/_globals/header/Navigation.astro`):

   ```astro
   ["Work", "/work"],
   ```

3. The content collections config already has the `work` collection defined in `src/content.config.ts`

## Why Content is Retained

- Portfolio/work items represent valuable professional history
- Can be referenced in future site redesigns
- Migrating to new content management system
