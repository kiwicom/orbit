import { orbitComponentsPreset } from "@kiwicom/orbit-tailwind-preset";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    path.join(path.dirname(require.resolve("@kiwicom/orbit-components")), "**/*.js"),
  ],
  presets: [
    orbitComponentsPreset({
      disablePreflight: false,
    }),
  ],
} satisfies Config;
