import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import VitePluginRadar from 'vite-plugin-radar'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),



    VitePluginRadar({
      analytics: {
        id: 'G-1M1GVGYGH9', // Replace with your GA4 Measurement ID
      },
    }),




  ],
})