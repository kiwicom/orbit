// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import { Tokens } from "@kiwicom/orbit-design-tokens";

declare module "@kiwicom/orbit-components/theme";

export interface ThemeShape {
  readonly orbit: Tokens;
  readonly transitions?: boolean;
  readonly rtl?: boolean;
}

export type ThemeType = {
  theme: ThemeShape;
};

declare const Theme: ThemeShape;
export default Theme;
