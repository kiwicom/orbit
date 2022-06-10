import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/*.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: true,
  clean: true,
});
