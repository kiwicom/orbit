// @flow
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UIDReset, UIDFork } from "react-uid";

import Dictionary from "../Dictionary";
import QueryContext from "./QueryContext";
import useMediaQueryContext from "./QueryContext/useMediaQueryContext";

import type { Props } from ".";

const ThemeProvider = ({ theme, dictionary, children }: Props): React.Node => {
  const media = useMediaQueryContext();

  return (
    <QueryContext.Provider value={media}>
      <UIDReset>
        <UIDFork>
          <StyledThemeProvider theme={theme}>
            {dictionary ? (
              <Dictionary values={dictionary}>{React.Children.only(children)}</Dictionary>
            ) : (
              React.Children.only(children)
            )}
          </StyledThemeProvider>
        </UIDFork>
      </UIDReset>
    </QueryContext.Provider>
  );
};

export default ThemeProvider;
