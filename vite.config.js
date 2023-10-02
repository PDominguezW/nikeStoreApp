import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Set the root directory of your project,
  build: {
    outDir: 'dist', // Specify your output directory here
    // Add any production-specific configurations here
  },
})
