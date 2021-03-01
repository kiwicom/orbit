// @flow
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import defaultTheme from "../../defaultTheme";

import type { UseTheme } from "./index.js.flow";

const useTheme: UseTheme = () => useContext(ThemeContext) || defaultTheme;

export default useTheme;
