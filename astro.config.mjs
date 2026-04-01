import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pierclaud7.github.io',
  base: '/Blog4ir',
  integrations: [mdx(), sitemap()],
});