// @flow
import React from "react";

import ThemeProvider from "./Theming/ThemeProvider";

const withTheme = story => <ThemeProvider>{story()}</ThemeProvider>;

export default withTheme;
