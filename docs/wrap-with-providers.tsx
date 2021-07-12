import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";

import { DevModeProvider } from "./src/hooks/useDevMode";
import { TableOfContentsProvider } from "./src/services/table-of-contents";
import theme from "./src/theme";

export default function wrapWithProviders({ element }: { element: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <DevModeProvider>
        <TableOfContentsProvider>{element}</TableOfContentsProvider>
      </DevModeProvider>
    </ThemeProvider>
  );
}
