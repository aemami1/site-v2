import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  server: { port: 5173, open: false },
  build: {
    // Keep /assets/ and /uploads/ in public/ as user-facing paths.
    // Vite's own bundle output goes to /_vite/ to avoid colliding with public/assets/.
    assetsDir: "_vite",
  },
});
