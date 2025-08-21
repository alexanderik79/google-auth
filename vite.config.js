import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      'needed-quagga-ultimate.ngrok-free.app',
      'my-google-auth.netlify.app'
    ]
  },
  plugins: [react()],
})
