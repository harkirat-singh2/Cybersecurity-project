import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    sourcemap: false, // Disable source maps in production
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'react-router-hash-link'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'lucide': ['lucide-react'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
  },
});
