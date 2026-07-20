# apphane website

Landing page for [apphane](https://apphane.dev) — a house for small, sharp tools.

Built with [Astro](https://astro.build), deployed to GitHub Pages via
`.github/workflows/deploy.yml` on every push to `main`, served at the custom
domain configured in `public/CNAME`.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

### Example content

Seed/example content (placeholder writing posts, recommendations, and sponsors)
is hidden by default. Set the build-time flag `SHOW_EXAMPLES=1` to include it in
a dev/preview build — e.g. `SHOW_EXAMPLES=1 npx astro build`. The flag is read
in `src/lib/flags.ts` and applied at each data query (`src/lib/writing.ts` and
the `src/data/*` modules).

## Adding a project

Projects are data-driven: add an entry to `src/data/projects.ts` and its card
and lit window appear automatically. Dark windows in the strip are placeholders
for projects not yet public — bump `HOUSE_WINDOWS` if the house runs out of
rooms.
