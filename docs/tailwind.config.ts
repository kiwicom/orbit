import orbitComponentsPreset from "@kiwicom/orbit-tailwind-preset";
import type { Config } from "tailwindcss/dist/lib.d.mts";
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
  presets: [orbitComponentsPreset()],
} satisfies Config;
