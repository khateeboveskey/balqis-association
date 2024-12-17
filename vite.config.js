import { fileURLToPath, URL } from 'node:url';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    ViteImageOptimizer({
      png: {
        quality: 30
      },
      jpeg: {
        quality: 30
      },
      jpg: {
        quality: 30
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
