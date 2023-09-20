"use client";

import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import QueryContextProvider from "./QueryContext/Provider";
import RandomIdProvider from "./RandomId/Provider";
import type { Props } from "./types";

/**
 *
 * Use OrbitProvider with useId prop as follows to still use `react-uid`:
 * ```jsx
    <UIDReset>
      <UIDFork>
        <OrbitProvider theme={theme} useId={useUID}>
          {children}
        </OrbitProvider>
      </UIDFork>
    </UIDReset>
 * ```
 *
 */
const OrbitProvider = ({ theme, children, useId = React.useId }: Props) => {
  return (
    <RandomIdProvider useId={useId}>
      <StyledThemeProvider theme={theme}>
        <QueryContextProvider>{children}</QueryContextProvider>
      </StyledThemeProvider>
    </RandomIdProvider>
  );
};

export default OrbitProvider;
