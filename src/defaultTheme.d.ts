// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import { Tokens } from "@kiwicom/orbit-design-tokens";

declare module "@kiwicom/orbit-components/theme";

export interface Theme {
  readonly orbit: Tokens;
  readonly transitions?: boolean;
  readonly rtl?: boolean;
}

export interface ThemeProps {
  theme: Theme;
}
