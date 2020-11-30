// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import { Tokens } from "@kiwicom/orbit-design-tokens/lib/js/createTokens";

declare module "@kiwicom/orbit-components/lib/defaultTheme";
export interface ThemeShape {
  readonly orbit: Tokens;
  readonly transitions?: boolean;
  readonly lockScrolling?: boolean;
  readonly lockScrollingBarGap?: boolean;
  readonly rtl?: boolean;
}

export type ThemeType = {
  theme: ThemeShape;
};

declare const Theme: ThemeShape;
export default Theme;
