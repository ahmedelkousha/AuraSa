import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),

    // Image compression & modern formats
    ViteImageOptimizer({
      // Modern formats (BEST)
      webp: {
        quality: 75,
      },
      avif: {
        quality: 60,
      },

      // Fallback formats
      png: {
        quality: 70,
      },
      jpeg: {
        quality: 75,
      },

      // SVG optimization
      svg: {
        multipass: true,
      },
    }),

    // Dev-only component tagger
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
