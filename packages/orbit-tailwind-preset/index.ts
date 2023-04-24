import { defaultTokens } from "@kiwicom/orbit-design-tokens";
import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  mode: "jit",
  theme: {
    colors: {
      background: {
        button: {
          primary: defaultTokens.backgroundButtonPrimary,
          "primary-hover": defaultTokens.backgroundButtonPrimaryHover,
          "primary-active": defaultTokens.backgroundButtonPrimaryActive,
          secondary: defaultTokens.backgroundButtonSecondary,
          "secondary-hover": defaultTokens.backgroundButtonSecondaryHover,
          "secondary-active": defaultTokens.backgroundButtonSecondaryActive,
          info: defaultTokens.backgroundButtonInfo,
          "info-hover": defaultTokens.backgroundButtonInfoHover,
          "info-active": defaultTokens.backgroundButtonInfoActive,
          success: defaultTokens.backgroundButtonSuccess,
          warning: defaultTokens.backgroundButtonWarning,
          critical: defaultTokens.backgroundButtonCritical,
          facebook: defaultTokens.backgroundButtonFacebook,
          google: defaultTokens.backgroundButtonGoogle,
        },
      },
    },
  },
  // should be empty to remove default tailwind defaults
  presets: [],
  // add variants here
  plugins: [],
};

console.log(preset.theme.colors);

export default preset;
