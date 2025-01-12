import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/user": {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      },
      "/captains":{
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false,
      }
    },
  },
  plugins: [react()],
});
