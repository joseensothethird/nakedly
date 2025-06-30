import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import checker from "vite-plugin-checker"; // Import the checker plugin

export default defineConfig({
  plugins: [
    checker({ typescript: true }), // Now properly imported
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Correct path alias
    },
  },
});