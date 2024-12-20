import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  base: '/christmas-app/',
});
