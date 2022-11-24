import React from "react";
import { OrbitProvider } from "@kiwicom/orbit-components";

import { DevModeProvider } from "./src/hooks/useDevMode";
import { TableOfContentsProvider } from "./src/services/table-of-contents";
import theme from "./src/theme";
import { KeyboardContextProvider } from "./src/services/KeyboardProvider";

export const wrapWithProviders = ({ element }) => {
  return (
    <OrbitProvider theme={theme}>
      <KeyboardContextProvider>
        <DevModeProvider>
          <TableOfContentsProvider>{element}</TableOfContentsProvider>
        </DevModeProvider>
      </KeyboardContextProvider>
    </OrbitProvider>
  );
};

export default wrapWithProviders;
