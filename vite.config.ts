import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from 'path'

export default defineConfig({
  plugins: [react()],
  // vite.config.js
  resolve: {
    alias: {
      '@hooks': path.resolve(__dirname, './src/hooks'), // adjust the path according to your project structure
    },
  },

});
