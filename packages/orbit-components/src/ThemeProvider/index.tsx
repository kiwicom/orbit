import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UIDReset, UIDFork } from "react-uid";

import Dictionary from "../Dictionary";
import QueryContextProvider from "./QueryContext/Provider";
import { Props } from "./index.d";

const ThemeProvider = ({ theme, dictionary, children }: Props) => {
  return (
    <UIDReset>
      <UIDFork>
        <StyledThemeProvider theme={theme}>
          <QueryContextProvider>
            {dictionary ? (
              <Dictionary values={dictionary}>{React.Children.only(children)}</Dictionary>
            ) : (
              React.Children.only(children)
            )}
          </QueryContextProvider>
        </StyledThemeProvider>
      </UIDFork>
    </UIDReset>
  );
};

export default ThemeProvider;
