import type { Config } from "tailwindcss";
import orbitPreset from "@kiwicom/orbit-tailwind-preset";

export default {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  presets: [
    orbitPreset({
      disabledPreflight: false,
    }),
  ],
} satisfies Config;
