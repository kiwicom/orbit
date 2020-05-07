// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/ThemeProvider";

interface Props {
  readonly theme: any; // @see ThemeProvider+DefaultTheme types in styled-components d.ts file
  readonly dictionary?: Common.Translations;
  readonly children: React.ReactNode;
}
declare const ThemeProvider: React.Component<Props>;
export { ThemeProvider, ThemeProvider as default };
