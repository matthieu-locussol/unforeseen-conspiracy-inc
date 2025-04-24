/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
   clearScreen: false,
   server: {
      port: 5173,
      strictPort: true,
      host: host || false,
      hmr: host
         ? {
              protocol: 'ws',
              host,
              port: 1421,
           }
         : undefined,

      watch: {
         ignored: ['**/src-tauri/**'],
      },
   },
   envPrefix: ['VITE_', 'TAURI_ENV_*'],
   build: {
      target: process.env.TAURI_ENV_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
      minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
      sourcemap: !!process.env.TAURI_ENV_DEBUG,
   },
   plugins: [react()],
   test: {
      coverage: {
         provider: 'v8',
         include: ['src/**/*.ts'],
         exclude: [
            'node_modules/**',
            'dist/**',
            '**/*.d.ts',
            '**/*.test.ts',
            '**/*.spec.ts',
            '**/data/**',
            '**/i18n/**',
            '**/types/**',
         ],
      },
   },
});
