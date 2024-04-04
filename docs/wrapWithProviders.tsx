import React from "react";
import { ThemeProvider } from "styled-components";
import { OrbitProvider } from "@kiwicom/orbit-components";

import { DevModeProvider } from "./src/hooks/useDevMode";
import { TableOfContentsProvider } from "./src/services/table-of-contents";
import theme from "./src/theme";
import { KeyboardContextProvider } from "./src/services/KeyboardProvider";

export const wrapWithProviders = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <OrbitProvider useId={React.useId} theme={theme}>
        <KeyboardContextProvider>
          <DevModeProvider>
            <TableOfContentsProvider>{element}</TableOfContentsProvider>
          </DevModeProvider>
        </KeyboardContextProvider>
      </OrbitProvider>
    </ThemeProvider>
  );
};

export default wrapWithProviders;
