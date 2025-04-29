"use client";

import * as React from "react";
import { tokensToCssVars, defaultTokens } from "@kiwicom/orbit-design-tokens";
import { parseToRgba } from "color2k";

import QueryContextProvider from "./QueryContext/Provider";
import RandomIdProvider from "./RandomId/Provider";
import type { Props } from "./types";
import ThemeProvider from "./ThemeProvider/Provider";

export const getCssVarsForWL = (theme: typeof defaultTokens) =>
  Object.keys(theme).reduce((acc, key) => {
    if (key.startsWith("palette") || key.startsWith("buttonPrimary") || key === "borderRadius100") {
      try {
        if (key === "borderRadius100") {
          acc[key] = theme[key];
        } else {
          // the token is a color
          acc[key] = parseToRgba(theme[key] as string)
            .slice(0, -1)
            .join(", ");
        }
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
 * The OrbitProvider component provides theming and other Orbit features to the application.
 */

const OrbitProvider = ({ theme, children }: Props) => {
  return (
    <RandomIdProvider>
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
