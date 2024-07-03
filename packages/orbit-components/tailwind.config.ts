import type { Config } from "tailwindcss";
import orbitPreset from "@kiwicom/orbit-tailwind-preset";

export default {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  presets: [
    orbitPreset({
      disablePreflight: process.env.NODE_ENV === "test",
    }),
  ],
  // This flag will likely be in v4.
  // https://github.com/tailwindlabs/tailwindcss/discussions/1739#discussioncomment-3630717
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
} satisfies Config;
