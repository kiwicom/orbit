import type { Config } from "tailwindcss/dist/lib.d.mts";
import orbitPreset from "@kiwicom/orbit-tailwind-preset";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [orbitPreset()],
  // This flag will likely be in v4.
  // https://github.com/tailwindlabs/tailwindcss/discussions/1739#discussioncomment-3630717
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
} satisfies Config;
