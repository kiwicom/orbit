const { default: orbitPreset, orbitComponentsPreset } = require("@kiwicom/orbit-tailwind-preset");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{ts,tsx}"],
  presets: [
    orbitPreset,
    orbitComponentsPreset({
      disabledPreflight: false,
    }),
  ],
};
