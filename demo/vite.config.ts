import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

/**
 * Demo Vite Configuration
 *
 * This config sets up the demo to import from the built distribution (dist/)
 * instead of source files. This better demonstrates how users will consume
 * the library in production.
 *
 * Note: Make sure to run `bun run build` first to generate the dist files
 * before starting the demo dev server.
 */
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname),
  base: '/react-simple-sidenav/',
  resolve: {
    alias: {
      // Alias the package name to the built distribution
      'react-simple-sidenav': resolve(__dirname, '../dist/react-simple-sidenav.js'),
    },
  },
  build: {
    outDir: resolve(__dirname, '../docs'),
    emptyOutDir: true,
  },
});
