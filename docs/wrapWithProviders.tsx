import React from "react";
import { ThemeProvider } from "@kiwicom/orbit-components";
import type { GatsbyBrowser } from "gatsby";

import { DevModeProvider } from "./src/hooks/useDevMode";
import { TableOfContentsProvider } from "./src/services/table-of-contents";
import theme from "./src/theme";
import { KeyboardContextProvider } from "./src/services/KeyboardProvider";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <KeyboardContextProvider>
        <DevModeProvider>
          <TableOfContentsProvider>{element}</TableOfContentsProvider>
        </DevModeProvider>
      </KeyboardContextProvider>
    </ThemeProvider>
  );
};

export default wrapPageElement;
