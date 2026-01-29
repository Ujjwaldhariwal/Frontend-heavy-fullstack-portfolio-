import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ⚠️ CRITICAL: Forces all components to use the same Three.js instance
      "three": path.resolve("./node_modules/three"),
    },
  },
});