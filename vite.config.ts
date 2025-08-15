import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Bestow/',
  build: {
    outDir: 'docs' 
  },
  optimizeDeps: {
    exclude: ['lucide-react']
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/
  }
})
