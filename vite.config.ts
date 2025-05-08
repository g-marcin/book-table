import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import {resolve} from 'path'
const root = resolve(__dirname, './src')

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@hooks': resolve(root, './hooks/*'),
      '@components':resolve(root, './components/*')
    },
  },

});
