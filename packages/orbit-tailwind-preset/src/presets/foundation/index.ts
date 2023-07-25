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
    colors: defaultFoundation.palette,
    borderRadius: defaultFoundation["border-radius"],
    screens,
    lineHeight: defaultFoundation["line-height"],
    boxShadow,
    transitionDuration: duration,
    spacing,
    ...font,
    extend: {
      zIndex: {
        default: String(defaultTokens.zIndexDefault),
        sticky: String(defaultTokens.zIndexSticky),
        modal: String(defaultTokens.zIndexModal),
        overlay: String(defaultTokens.zIndexModalOverlay),
        drawer: String(defaultTokens.zIndexDrawer),
        onTop: String(defaultTokens.zIndexOnTheTop),
      },
    },
  },
};

export default config;
