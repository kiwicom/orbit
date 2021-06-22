import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";

import { DevModeProvider } from "./src/hooks/useDevMode";
import { TableOfContentsProvider } from "./src/services/table-of-contents";
import theme from "./src/theme";
import { KeyboardContextProvider } from "./src/services/KeyboardProvider";

export default function wrapWithProviders({ element }: { element: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <DevModeProvider>
        <KeyboardContextProvider>
          <TableOfContentsProvider>{element}</TableOfContentsProvider>
        </KeyboardContextProvider>
      </DevModeProvider>
    </ThemeProvider>
  );
}
