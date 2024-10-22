import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Skill-Quest/", // Your repository name
  build: {
    outDir: "docs", // Output directory
  },
});
