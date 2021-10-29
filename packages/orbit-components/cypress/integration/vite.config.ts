import { defineConfig } from "vite";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@kiwicom/orbit-components": path.resolve(__dirname, "../../src"),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildFlowPlugin()],
    },
  },
  plugins: [flowPlugin()],
});
