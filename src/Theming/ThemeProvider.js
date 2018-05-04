// @flow
import * as React from "react";
import { ThemeProvider as ThemingProvider } from "theming";
import tokens from "@kiwicom/orbit-design-tokens";

type Props = {
  children: React.Node,
  theme?: $Shape<typeof tokens>,
};

const ThemeProvider = ({ children, theme }: Props) => (
  <ThemingProvider theme={theme || tokens}>{children}</ThemingProvider>
);

export default ThemeProvider;
