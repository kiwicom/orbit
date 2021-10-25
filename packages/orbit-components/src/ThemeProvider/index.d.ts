// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Translations } from "../Dictionary";
import { ThemeShape } from "../defaultTheme";

interface Props {
  readonly theme: ThemeShape;
  readonly dictionary?: Translations;
  readonly children: React.ReactNode;
}
declare const ThemeProvider: React.FunctionComponent<Props>;
export { ThemeProvider, ThemeProvider as default };
