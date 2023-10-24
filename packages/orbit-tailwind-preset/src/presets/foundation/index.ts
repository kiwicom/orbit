import type { Config } from "tailwindcss";
import type { defaultFoundation, defaultTokens } from "@kiwicom/orbit-design-tokens";

import getTailwindTheme from "./getTailwindTheme";

export interface CSSVarsFoundation extends Omit<typeof defaultFoundation, "breakpoint"> {
  breakpoint: Record<keyof (typeof defaultFoundation)["breakpoint"], string>;
}

const config = (tokens: typeof defaultTokens, cssVarsFoundation: CSSVarsFoundation): Config => {
  const theme = getTailwindTheme(cssVarsFoundation);

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
        raised: tokens.elevationRaisedBoxShadow,
        "raised-reverse": tokens.elevationRaisedReverseBoxShadow,
        action: tokens.elevationActionBoxShadow,
        "action-active": tokens.elevationActionActiveBoxShadow,
        overlay: tokens.elevationOverlayBoxShadow,
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
