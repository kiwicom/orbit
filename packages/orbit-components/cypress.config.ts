import { defineConfig } from "cypress";
import { devServer } from "@cypress/vite-dev-server";

export default defineConfig({
  pageLoadTimeout: 120000,
  e2e: {
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/**/*.test.*",
    supportFile: "cypress/support/e2e.ts",
  },
  component: {
    specPattern: "cypress/**/*.test.*",
    supportFile: "cypress/support/component.ts",
    devServer(devServerConfig) {
      return devServer({
        ...devServerConfig,
        framework: "react",
        spec: "cypress/component/**/*.test.*",
        // @ts-expect-error TODO
        viteConfig: async () => {
          const config = await import("./cypress/integration/vite.config");
          return config.default;
        },
      });
    },
  },
});
