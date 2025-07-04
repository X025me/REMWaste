import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [".csb.app"], // Allows any *.csb.app host (for CodeSandbox)
  },
});
