// @flow
import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UIDReset, UIDFork } from "react-uid";

import Dictionary from "../Dictionary";
import { QueryContextProvider } from "./QueryContext";

import type { Props } from ".";

const ThemeProvider = ({ theme, dictionary, children }: Props): React.Node => {
  return (
    <QueryContextProvider>
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
    </QueryContextProvider>
  );
};

export default ThemeProvider;
