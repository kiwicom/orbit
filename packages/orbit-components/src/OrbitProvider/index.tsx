"use client";

import * as React from "react";
import { tokensToCssVars, defaultTokens } from "@kiwicom/orbit-design-tokens";
import { parseToRgba } from "color2k";

import QueryContextProvider from "./QueryContext/Provider";
import RandomIdProvider from "./RandomId/Provider";
import type { Props } from "./types";
import ThemeProvider from "./ThemeProvider/Provider";

// we need only palette tokens for whitelables
const getCssVarsForWL = (theme: typeof defaultTokens) =>
  Object.keys(theme).reduce((acc, key) => {
    if (key.startsWith("palette")) {
      try {
        acc[key] = parseToRgba(theme[key] as string)
          .slice(0, -1)
          .join(", ");
      } catch (e) {
        console.error(
          "OrbitProvider-getCssVarsForWL: couldn't parse palette color, using fallback value from defaultTheme",
          key,
          e,
        );
        acc[key] = parseToRgba(defaultTokens[key]).slice(0, -1).join(", ");
      }
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
      <ThemeProvider theme={theme}>
        <QueryContextProvider>{children}</QueryContextProvider>
      </ThemeProvider>
    </RandomIdProvider>
  );
};

export default OrbitProvider;
