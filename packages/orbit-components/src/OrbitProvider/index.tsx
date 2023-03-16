import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { UIDReset, UIDFork } from "react-uid";

import QueryContextProvider from "./QueryContext/Provider";
import type { Props } from "./types";

const OrbitProvider = ({ theme, children }: Props) => {
  return (
    <UIDReset>
      <UIDFork>
        <StyledThemeProvider theme={theme}>
          <QueryContextProvider>{React.Children.only(children)}</QueryContextProvider>
        </StyledThemeProvider>
      </UIDFork>
    </UIDReset>
  );
};

export default OrbitProvider;
