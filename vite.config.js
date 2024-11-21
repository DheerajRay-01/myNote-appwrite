import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Vercel serves static files from 'dist' by default
  },
  server: {
    historyApiFallback: true, // Ensures local development handles routes correctly
  },
});
