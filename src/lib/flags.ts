/**
 * Build-time feature flag for placeholder / example content.
 *
 * Default (env unset) = hidden, so production builds ship none of the seed
 * writing posts, placeholder recommendations, or example sponsors. A dev or
 * preview build opts in with `SHOW_EXAMPLES=1 npx astro build`.
 *
 * Read from the build-time environment (`process.env`, populated in Node during
 * `astro build`). Compared as a string ('1') so an unset var is falsy. Note:
 * non-prefixed vars are not reliably surfaced on `import.meta.env` inside plain
 * modules across Astro versions, so we read `process.env` directly.
 */
export const SHOW_EXAMPLES = process.env.SHOW_EXAMPLES === '1';
