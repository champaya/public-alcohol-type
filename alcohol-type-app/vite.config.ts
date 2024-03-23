import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  define: {
    global: "window",
  },
});
