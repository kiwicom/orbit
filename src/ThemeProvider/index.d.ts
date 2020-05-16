// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { Translations } from "../Dictionary";
import type { Theme } from "../defaultTheme";

declare module "@kiwicom/orbit-components/lib/ThemeProvider";

interface Props {
  readonly theme: Theme;
  readonly dictionary?: Translations;
  readonly children: React.ReactNode;
}
declare const ThemeProvider: React.FunctionComponent<Props>;
export { ThemeProvider, ThemeProvider as default };
