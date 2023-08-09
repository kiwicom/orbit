import type { Config } from "tailwindcss";
import orbitPreset, { orbitComponentsPreset } from "@kiwicom/orbit-tailwind-preset";

export default {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  presets: [
    orbitPreset,
    orbitComponentsPreset({
      disablePreflight: false,
    }),
  ],
} satisfies Config;
