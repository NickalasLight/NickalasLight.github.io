
import react from '@vitejs/plugin-react';
import VitePluginRadar from 'vite-plugin-radar';
import * as dotenv from 'dotenv';
import {defineConfig,loadEnv} from "vite";


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Use './' as the root directory for environment variables
  const env = loadEnv(mode, "./", "");

  return {
    plugins: [
      react(),
      VitePluginRadar({
        analytics: {
          id: env.VITE_GA4_ID, // Use the GA4 ID from the .env file
        },
      }),
    ],
    define: {
      GA_MEASUREMENT_ID: JSON.stringify(env.VITE_GA4_ID),
    },
  };
});