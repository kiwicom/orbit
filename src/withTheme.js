// @flow
import React from "react";

import ThemeProvider from "./Theming/ThemeProvider";

const withTheme = (story: () => void) => <ThemeProvider>{story()}</ThemeProvider>;

export default withTheme;
