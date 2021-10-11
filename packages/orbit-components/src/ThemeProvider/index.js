// @flow
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Dictionary from "../Dictionary";
import { QueryContextProvider } from "./QueryContext";

import type { Props } from ".";

const ThemeProvider = ({ theme, dictionary, children }: Props): React.Node => {
  return (
    <QueryContextProvider>
      <StyledThemeProvider theme={theme}>
        {dictionary ? (
          <Dictionary values={dictionary}>{React.Children.only(children)}</Dictionary>
        ) : (
          React.Children.only(children)
        )}
      </StyledThemeProvider>
    </QueryContextProvider>
  );
};

export default ThemeProvider;
