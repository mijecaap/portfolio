import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mijecaap.github.io',
  base: '/',
  integrations: [react(), tailwind()]
});