import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@cart": path.resolve(__dirname, "./src/features/cart"),
      "@user": path.resolve(__dirname, "./src/features/user"),
      "@checkout": path.resolve(__dirname, "./src/features/checkout"),
      "@products": path.resolve(__dirname, "./src/features/products"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@ui": path.resolve(__dirname, "./src/ui"),
      "@reducers": path.resolve(__dirname, "./src/reducers"),
      "@store": path.resolve(__dirname, "./src/store"),
    },
  },
});
