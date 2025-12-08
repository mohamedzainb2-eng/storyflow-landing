import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "storyflow-landing";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,   
  build: {
    outDir: "docs",       
  },
});
