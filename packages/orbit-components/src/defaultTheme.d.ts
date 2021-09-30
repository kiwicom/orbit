// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import { Tokens } from "@kiwicom/orbit-design-tokens";

declare module "@kiwicom/orbit-components/theme";

export interface Theme {
  readonly orbit: Tokens;
  readonly transitions?: boolean;
  readonly lockScrolling?: boolean;
  readonly rtl?: boolean;
}

export interface ThemeProps {
  theme: Theme;
}

declare const defaultTheme: Theme;
export default defaultTheme;
