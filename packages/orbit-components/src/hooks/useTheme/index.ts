import { useContext } from "react";

import type { Theme } from "../../defaultTheme";
import defaultTheme from "../../defaultTheme";
import { ThemeContext } from "../../OrbitProvider/ThemeProvider/Provider";

const useTheme = (): Theme => useContext(ThemeContext) || defaultTheme;

export default useTheme;
