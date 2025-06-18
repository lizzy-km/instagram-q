import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true,
    // "/api": {
    //   target: "https://api.digitalbase.com.mm", // Replace with your backend API URL
    //   changeOrigin: true // Needed for virtual hosted sites
    //   //   secure: false, // Set to true if your backend uses HTTPS and you want to validate certs
    //   // ws: true, // Enable websocket proxying
    // }
  },
})
