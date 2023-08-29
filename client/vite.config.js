import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001/graphql',
        secure: false,
        changeOrigin: true
      },
      '/api/gamecollection/rawgkey': {
        target: 'http://localhost:3001/api/gamecollection/rawgkey',
        secure: false,
        changeOrigin: true
      }
    }
  }
})
