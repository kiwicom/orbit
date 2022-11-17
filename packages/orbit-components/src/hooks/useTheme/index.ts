import { useContext } from "react";
import { ThemeContext } from "styled-components";

import type { Theme } from "../../defaultTheme";
import defaultTheme from "../../defaultTheme";

const useTheme = (): Theme => useContext(ThemeContext) || defaultTheme;

export default useTheme;
