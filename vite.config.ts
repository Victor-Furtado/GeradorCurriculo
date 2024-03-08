import path from "path";
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@lib": `${path.resolve(__dirname, "./src/lib/")}`,
    },
  },
})
