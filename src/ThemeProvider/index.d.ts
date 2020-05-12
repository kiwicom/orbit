// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import { Translations } from "../Dictionary";

declare module "@kiwicom/orbit-components/lib/ThemeProvider";

interface Props {
  readonly theme: any; // @see ThemeProvider+DefaultTheme types in styled-components d.ts file
  readonly dictionary?: Translations;
  readonly children: React.ReactNode;
}
declare const ThemeProvider: React.Component<Props>;
export { ThemeProvider, ThemeProvider as default };
