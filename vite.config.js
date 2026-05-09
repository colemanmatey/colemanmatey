import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

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
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
