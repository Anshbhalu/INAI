import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vercel knows where to find the output
  },
  base: '/', // Keep this '/' unless you're deploying under a subpath
})
