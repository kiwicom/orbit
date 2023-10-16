"use client";

import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { tokensToCssVars } from "@kiwicom/orbit-design-tokens";
import type { defaultTokens } from "@kiwicom/orbit-design-tokens";

import QueryContextProvider from "./QueryContext/Provider";
import RandomIdProvider from "./RandomId/Provider";
import type { Props } from "./types";

// we need only palette tokens for whitelables
const getCssVarsForWL = (theme: typeof defaultTokens) =>
  Object.keys(theme).reduce((acc, key) => {
    if (key.startsWith("palette")) {
      acc[key] = theme[key];
    }
    return acc;
  }, {});

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

const OrbitProvider = ({ theme, children, useId }: Props) => {
  React.useEffect(() => {
    const ID = "orbit-theme-css-vars";
    const style = document.createElement("style");
    style.setAttribute("id", ID);
    style.innerText = tokensToCssVars({ tokens: getCssVarsForWL(theme.orbit), cssClass: ":root" });
    const head = document.getElementsByTagName("head")[0];
    if (!document.getElementById(ID)) {
      head.appendChild(style);
    }
  }, [theme]);

  return (
    <RandomIdProvider useId={useId}>
      <StyledThemeProvider theme={theme}>
        <QueryContextProvider>{children}</QueryContextProvider>
      </StyledThemeProvider>
    </RandomIdProvider>
  );
};

export default OrbitProvider;
