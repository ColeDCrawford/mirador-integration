import { defineConfig } from 'vite'
import path from 'path';

export default defineConfig({
    root: __dirname,
    resolve: {
        alias: {
          '/@': path.resolve(__dirname, '../src')
        }
    },
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, '../src/index.js'),
        output: {
          entryFileNames: 'main.js',
        },
      },
      outDir: path.resolve(__dirname, 'dist'),
      emptyOutDir: true,
    },
    server: {
      open: true,
    },
    preview: {
        open: true,
        port: 4173,
      },
  });