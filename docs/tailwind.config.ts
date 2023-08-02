import { orbitComponentsPreset } from "@kiwicom/orbit-tailwind-preset";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [
    orbitComponentsPreset({
      disablePreflight: false,
    }),
  ],
} satisfies Config;
