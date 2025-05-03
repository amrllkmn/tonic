import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "src/popup/popup.html"),
        content: resolve(__dirname, "src/content/main.ts"),
        background: resolve(__dirname, "src/background/background.ts"),
      },
      output: {
        entryFileNames: "[name]/[name].js",
        chunkFileNames: "[name]/[name].js",
        assetFileNames: "[name]/[name].[ext]",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
});
