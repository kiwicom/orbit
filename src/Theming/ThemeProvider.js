// @flow
import * as React from "react";
import { ThemeProvider } from "theming";
import tokens from "@kiwicom/orbit-design-tokens";

type Props = {
  children: any,
  theme?: $Shape<typeof tokens>,
};

export default ({ children, theme }: Props) => (
  <ThemeProvider theme={theme || tokens}>{children}</ThemeProvider>
);
