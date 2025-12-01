// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',           // use relative paths so index.html loads assets reliably
  build: { outDir: 'dist' } // produce dist/ instead of build/
})
