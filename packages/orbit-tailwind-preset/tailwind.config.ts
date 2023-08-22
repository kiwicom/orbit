import orbitComponentsPreset from "./dist";

export default {
  // include only for testing purposes
  content: ["./src/presets/__fixtures__/*.tsx"],
  presets: [orbitComponentsPreset()],
};
