// @ts-check
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE / BASE are set by the GitHub Pages workflow (served from /workplace-legal/).
// Locally and in production they default to the real domain at root.
const site = process.env.SITE ?? 'https://www.workplacelegal.ca';
const base = process.env.BASE ?? '/';

/**
 * Pages and components use root-absolute paths ("/contact", "/brand/…").
 * When deployed under a sub-path, prefix them in the built HTML so links resolve.
 */
function prefixRootPaths() {
  const prefix = base.replace(/\/$/, '');
  return {
    name: 'prefix-root-paths',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        if (!prefix) return;
        const attr = new RegExp(`\\b(href|src|action)="/(?!/|${prefix.slice(1)}/)`, 'g');
        await Promise.all(
          pages.map(async ({ pathname }) => {
            const file = fileURLToPath(new URL(`${pathname}index.html`.replace(/^404\/index/, '404'), dir));
            const html = await readFile(file, 'utf8').catch(() => null);
            if (html) await writeFile(file, html.replace(attr, `$1="${prefix}/`));
          }),
        );
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap({ filter: (page) => !/\/(style-guide|thank-you)\/?$/.test(page) }), prefixRootPaths()],
  // Preserve legacy Webflow URLs.
  redirects: {
    '/workin-progress': `${base.replace(/\/$/, '')}/podcast`,
  },
});
