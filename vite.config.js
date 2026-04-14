import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Root is the project folder
  publicDir: 'public', // Static assets like favicon.ico
  build: {
    outDir: 'dist', // Where the build files go
    emptyOutDir: true, // Cleans the folder before each build
    assetsInlineLimit: 4096, // Inlines small images (<4KB) as Base64 to save requests
  },
  server: {
    open: true, // Opens browser on npm run dev
  }
});