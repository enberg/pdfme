import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@pdfme/ui',
      fileName: () => `index.js`,
      formats: ['es'],
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'pdfjs-dist', 'antd'],
    exclude: ['@pdfme/common', '@pdfme/schemas'],
  },
});
