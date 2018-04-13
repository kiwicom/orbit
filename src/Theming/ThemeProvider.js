// @flow
import * as React from "react";
import { ThemeProvider } from "theming";
import defaultTheme from "orbit-design-token";

type Props = {
  children: any,
  theme?: $Shape<typeof defaultTheme>,
};

export default ({ children, theme }: Props) => (
  <ThemeProvider theme={theme || defaultTheme}>{children}</ThemeProvider>
);
