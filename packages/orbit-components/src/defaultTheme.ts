import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import DefaultTheme from "./defaultTheme.d";

const defaultTheme: typeof DefaultTheme = {
  orbit: defaultTokens,
  transitions: true,
  lockScrolling: true,
  lockScrollingBarGap: false,
  rtl: false,
};

export default defaultTheme;
