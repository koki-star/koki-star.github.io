import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages user site (koki-star.github.io) is served from the domain root, so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
