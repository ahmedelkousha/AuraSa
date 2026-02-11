import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  base: "/",
  plugins: [
    react(),
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),

    // Image compression & modern formats
    ViteImageOptimizer({
      // Modern formats (BEST)
      webp: {
        quality: 80,
      },
      avif: {
        quality: 80,
      },

      // Fallback formats
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
    }),

  ].filter(Boolean),


  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
