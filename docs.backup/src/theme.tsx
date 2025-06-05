import { defaultTokens } from "@kiwicom/orbit-design-tokens";

export default {
  orbit: {
    ...defaultTokens,
    breakpointDesktop: 1024,
    fontFamily: '"DM Sans", sans-serif',
    fontSizeTextLarge: "18px",
    fontSizeTextNormal: "16px",
    fontSizeTextSmall: "14px",
    fontSizeTextXSmall: "12px",
    boxShadowRaisedSubtle:
      "rgb(37 42 49 / 8%) 0px 4px 8px 0px, rgb(37 42 49 / 16%) 0px 8px 24px 0px;",
  },
  transitions: true,
  lockScrolling: true,
  lockScrollingBarGap: true,
  rtl: false,
};
