// @flow
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import typeof DefaultTheme from "./defaultTheme";

const defaultTheme: DefaultTheme = {
  orbit: defaultTokens,
  transitions: true,
  lockScrolling: true,
  lockScrollingBarGap: false,
  rtl: false,
};

export default defaultTheme;
