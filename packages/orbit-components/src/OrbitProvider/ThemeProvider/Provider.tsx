import * as React from "react";

import type { Theme } from "../../defaultTheme";
import defaultTheme from "../../defaultTheme";

export const ThemeContext = React.createContext(defaultTheme);

const ThemeProvider = ({ children, theme }: { children: React.ReactNode; theme: Theme }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
