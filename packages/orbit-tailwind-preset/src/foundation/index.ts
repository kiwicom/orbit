import type { Config } from "tailwindcss";
import type { defaultTokens } from "@kiwicom/orbit-design-tokens";

import getTailwindTheme from "./getTailwindTheme";

const config = (tokens: typeof defaultTokens): Config => {
  const theme = getTailwindTheme(tokens);

  return {
    content: ["auto"],
    corePlugins: {
      preflight: false,
    },
    theme: {
      ...theme,
      boxShadow: {
        none: "none",
        fixed: tokens.elevationFixedBoxShadow,
        "fixed-reverse": tokens.elevationFixedReverseBoxShadow,
        level1: tokens.elevationLevel1BoxShadow,
        level2: tokens.elevationLevel2BoxShadow,
        level3: tokens.elevationLevel3BoxShadow,
        "level3-reverse": tokens.elevationLevel3ReverseBoxShadow,
        level4: tokens.elevationLevel4BoxShadow,
      },
      transitionDuration: {
        fast: tokens.durationFast,
        normal: tokens.durationNormal,
        slow: tokens.durationSlow,
      },
      extend: {
        zIndex: {
          default: String(tokens.zIndexDefault),
          sticky: String(tokens.zIndexSticky),
          "navigation-bar": String(tokens.zIndexNavigationBar),
          modal: String(tokens.zIndexModal),
          overlay: String(tokens.zIndexModalOverlay),
          drawer: String(tokens.zIndexDrawer),
          onTop: String(tokens.zIndexOnTheTop),
        },
      },
    },
  };
};

export default config;
