// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

declare module '@kiwicom/orbit-components/theme'

import { Tokens } from "@kiwicom/orbit-design-tokens";

/*
Theme support
*/

export interface Theme {
    readonly orbit: Tokens;
    readonly rtl: boolean;
}

export interface ThemeProps {
    theme: Theme;
}
