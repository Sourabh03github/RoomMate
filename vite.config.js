import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        "node:/opt/build/repo/src/Components/ProductPage/ProductDes/ProductDes.jsx",
      ],
    },
  },
});
