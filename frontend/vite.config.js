import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change if needed
  },
  build: {
    outDir: "frontend/dist", // Ensure this is correctly set
  },
});
