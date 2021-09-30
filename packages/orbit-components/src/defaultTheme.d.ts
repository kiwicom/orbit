// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import { Tokens } from "@kiwicom/orbit-design-tokens";

export interface ThemeShape {
  readonly orbit: Tokens;
  readonly transitions?: boolean;
  readonly lockScrolling?: boolean;
  readonly rtl?: boolean;
}

export type ThemeType = {
  theme: ThemeShape;
};

declare const Theme: ThemeShape;
export default Theme;
