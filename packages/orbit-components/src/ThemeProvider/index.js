// @flow
import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Dictionary from "../Dictionary";
import QueryContext from "./QueryContext";
import useMediaQueryContext from "./QueryContext/useMediaQueryContext";

import type { Props } from "./index";

const ThemeProvider = ({ theme, dictionary, children }: Props) => {
  const media = useMediaQueryContext();

  return (
    <QueryContext.Provider value={media}>
      <StyledThemeProvider theme={theme}>
        {dictionary ? (
          <Dictionary values={dictionary}>{React.Children.only(children)}</Dictionary>
        ) : (
          React.Children.only(children)
        )}
      </StyledThemeProvider>
    </QueryContext.Provider>
  );
};

export default ThemeProvider;
