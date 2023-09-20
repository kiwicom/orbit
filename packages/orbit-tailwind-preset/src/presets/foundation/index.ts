import type { Config } from "tailwindcss";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import defaultFoundation from "./theme/defaultFoundation";
import { spacing, screens, font, boxShadow, duration } from "./theme";

const config: Config = {
  content: ["auto"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    colors: { ...defaultFoundation.palette, transparent: "transparent" },
    borderRadius: defaultFoundation["border-radius"],
    screens,
    lineHeight: { ...defaultFoundation["line-height"], none: "1" },
    boxShadow,
    transitionDuration: duration,
    spacing,
    ...font,
    extend: {
      zIndex: {
        default: String(defaultTokens.zIndexDefault),
        sticky: String(defaultTokens.zIndexSticky),
        "navigation-bar": String(defaultTokens.zIndexNavigationBar),
        modal: String(defaultTokens.zIndexModal),
        overlay: String(defaultTokens.zIndexModalOverlay),
        drawer: String(defaultTokens.zIndexDrawer),
        onTop: String(defaultTokens.zIndexOnTheTop),
      },
    },
  },
};

export default config;
