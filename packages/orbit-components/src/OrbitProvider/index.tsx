"use client";

import * as React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { tokensToCssVars } from "@kiwicom/orbit-design-tokens";
import { parseToRgba } from "color2k";
import type { defaultTokens } from "@kiwicom/orbit-design-tokens";

import QueryContextProvider from "./QueryContext/Provider";
import RandomIdProvider from "./RandomId/Provider";
import type { Props } from "./types";

// we need only palette tokens for whitelables
const getCssVarsForWL = (theme: typeof defaultTokens) =>
  Object.keys(theme).reduce((acc, key) => {
    if (key.startsWith("palette")) {
      acc[key] = parseToRgba(theme[key] as string)
        .slice(0, -1)
        .join(", ");
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
  return (
    <RandomIdProvider useId={useId}>
      {/* eslint-disable-next-line orbit-components/unique-id */}
      <style id="orbit-theme-css-vars">
        {tokensToCssVars({ tokens: getCssVarsForWL(theme.orbit), cssClass: ":root" })}
      </style>
      <StyledThemeProvider theme={theme}>
        <QueryContextProvider>{children}</QueryContextProvider>
      </StyledThemeProvider>
    </RandomIdProvider>
  );
};

export default OrbitProvider;
