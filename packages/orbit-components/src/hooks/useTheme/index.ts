import { useContext } from "react";
import { ThemeContext } from "styled-components";

import defaultTheme, { Theme } from "../../defaultTheme";

const useTheme = (): Theme => useContext(ThemeContext) || defaultTheme;

export default useTheme;
