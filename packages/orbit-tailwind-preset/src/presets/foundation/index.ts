import type { Config } from "tailwindcss";
import { defaultFoundation, defaultTokens } from "@kiwicom/orbit-design-tokens";
import type { CustomFoundation } from "@kiwicom/orbit-design-tokens/src/js/defaultFoundation";

import getTailwindFoundation from "./getTailwindFoundation";
import { createCustomFoundation } from "./createCustomFoundation";

interface Options {
  foundation: CustomFoundation;
}

const config = (options: Options): Config => {
  const { foundation } = options;
  const resolveFoundation = createCustomFoundation(defaultFoundation, foundation);
  const { screens, spacing, lineHeight, borderRadius, palette, fontFamily, fontSize, fontWeight } =
    getTailwindFoundation(resolveFoundation);

  return {
    content: ["auto"],
    corePlugins: {
      preflight: false,
    },
    theme: {
      colors: {
        ...palette,
      },
      borderRadius,
      screens,
      lineHeight,
      boxShadow: {
        none: "none",
        fixed: defaultTokens.elevationFixedBoxShadow,
        "fixed-reverse": defaultTokens.elevationFixedReverseBoxShadow,
        raised: defaultTokens.elevationRaisedBoxShadow,
        "raised-reverse": defaultTokens.elevationRaisedReverseBoxShadow,
        action: defaultTokens.elevationActionBoxShadow,
        "action-active": defaultTokens.elevationActionActiveBoxShadow,
        overlay: defaultTokens.elevationOverlayBoxShadow,
      },
      transitionDuration: {
        fast: defaultTokens.durationFast,
        normal: defaultTokens.durationNormal,
        slow: defaultTokens.durationSlow,
      },
      spacing,
      fontFamily,
      fontSize,
      fontWeight,
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
};

export default config;
