import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PAATH || "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Now '@' refers to 'src' folder
    },
  },
});
