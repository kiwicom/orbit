const path = require("path");
const orbitComponentsPreset = require("@kiwicom/orbit-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.{md,mdx}",
    "./blog/**/*.{md,mdx}",
    "./static/**/*.html",
    path.join(path.dirname(require.resolve("@kiwicom/orbit-components")), "**/*.js"),
  ],
  presets: [orbitComponentsPreset({ disablePreflight: false })],
  theme: {
    extend: {
      fontFamily: {
        base: "Dm Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
