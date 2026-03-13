import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    //minify: "esbuild",
    minify: false,
    outDir: "./build",
    emptyOutDir: false,
    copyPublicDir: false,
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }

        warn(warning);
      },
      input: {
        app: "index.html",
      },
      output: {
        entryFileNames: 'js/app.js',
        chunkFileNames: 'js/[name]-[hash].js'
      },
    },
  },
});
