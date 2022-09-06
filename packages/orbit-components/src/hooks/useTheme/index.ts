import { useContext } from "react";
import { ThemeContext } from "styled-components";

import defaultTheme from "../../defaultTheme";
import { useTheme as UseTheme } from "./index.d";

const useTheme: typeof UseTheme = () => useContext(ThemeContext) || defaultTheme;

export default useTheme;
