import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 }, // kompres JPG
      pngquant: { quality: [0.7, 0.9], speed: 4 }, // kompres PNG
      svgo: { plugins: [{ removeViewBox: false }] },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 2000, // default 500 KB
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"], 
        },
      },
    },
  },
});
