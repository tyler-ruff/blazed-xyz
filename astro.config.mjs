// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import netlify from '@astrojs/netlify';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://blazed.xyz',
  integrations: [mdx(), sitemap(), tailwind(), react()],
  output: 'server',
  adapter: netlify(),
});