// @flow
import * as React from "react";
import { ThemeProvider as ThemingProvider } from "theming";
import { defaultTokens as tokens } from "@kiwicom/orbit-design-tokens";

import type { Props } from "./ThemeProvider";

const ThemeProvider = ({ children, theme }: Props) => (
  <ThemingProvider theme={theme || tokens}>{children}</ThemingProvider>
);

export default ThemeProvider;
