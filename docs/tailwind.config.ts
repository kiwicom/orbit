import orbitComponentsPreset from "@kiwicom/orbit-tailwind-preset";
import type { Config } from "tailwindcss";
import path from "path";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    path.join(path.dirname(require.resolve("@kiwicom/orbit-components")), "**/*.js"),
  ],
  theme: {
    extend: {
      fontFamily: {
        base: "Dm Sans, sans-serif",
      },
    },
  },
  presets: [
    orbitComponentsPreset({
      disablePreflight: false,
    }),
  ],
} satisfies Config;
