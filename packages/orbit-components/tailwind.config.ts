import type { Config } from "tailwindcss";
import orbitPreset from "@kiwicom/orbit-tailwind-preset";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [
    orbitPreset({
      disablePreflight: process.env.NODE_ENV === "test",
    }),
  ],
} satisfies Config;
