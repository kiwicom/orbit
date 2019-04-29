// @flow
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Dictionary from "../Dictionary";

import type { Props } from "./index";

const ThemeProvider = ({ theme, dictionary, children }: Props) => (
  <StyledThemeProvider theme={theme}>
    {dictionary ? <Dictionary values={dictionary}>{children}</Dictionary> : children}
  </StyledThemeProvider>
);

export default ThemeProvider;
