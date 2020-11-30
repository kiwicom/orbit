import { createTheme } from "@kiwicom/orbit-design-tokens";
import { Tokens } from "@kiwicom/orbit-design-tokens/lib/js/createTokens";

interface DocsTokens extends Tokens {
  readonly boxShadowRaisedSubtle: string;
}

interface DocsThemeShape {
  readonly orbit: DocsTokens;
  readonly transitions?: boolean;
  readonly lockScrolling?: boolean;
  readonly rtl?: boolean;
}

const customTheme: DocsThemeShape = {
  orbit: {
    ...createTheme(),
    widthBreakpointDesktop: 1024,
    fontFamily: '"DM Sans", sans-serif',
    fontSizeHeadingDisplay: "48px",
    fontWeightHeadingDisplay: "700",
    fontSizeHeadingTitle1: "28px",
    fontWeightHeadingTitle1: "700",
    fontSizeHeadingTitle2: "22px",
    fontWeightHeadingTitle2: "500",
    fontSizeHeadingTitle3: "18px",
    fontWeightHeadingTitle3: "500",
    fontSizeHeadingTitle4: "16px",
    fontWeightHeadingTitle4: "500",
    fontSizeHeadingTitle5: "14px",
    fontWeightHeadingTitle5: "500",
    fontSizeTextLarge: "18px",
    fontSizeTextNormal: "16px",
    fontSizeTextSmall: "14px",
    fontSizeSmall: "12px",
    marginButtonIconLarge: "8px",
    boxShadowRaisedSubtle:
      "rgb(37 42 49 / 8%) 0px 4px 8px 0px, rgb(37 42 49 / 16%) 0px 8px 24px 0px;",
  },
  transitions: true,
  lockScrolling: true,
  lockScrollingBarGap: true,
  rtl: false,
};

export default customTheme;
