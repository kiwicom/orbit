import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), flowPlugin()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
    },
  },
  resolve: {
    alias: {
      "@kiwicom/orbit-components": path.resolve(__dirname, "../../src"),
    },
  },
});
