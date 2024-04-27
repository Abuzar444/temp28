import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/configg/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
