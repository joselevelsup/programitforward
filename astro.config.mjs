// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import frankenUI from 'franken-ui/plugin-vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      frankenUI({
        preflight: false,
      }),
      tailwindcss(),
    ],
  },
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
      wrap: true,
    },
  },
});
