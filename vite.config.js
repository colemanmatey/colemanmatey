import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),    
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Proxy dev requests starting with /api to the live portfolio API
      '/api': {
        target: 'https://portfolio.colemanmatey.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
