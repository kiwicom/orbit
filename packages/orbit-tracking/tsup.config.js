import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/react-scanner.config.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  clean: true,
});
