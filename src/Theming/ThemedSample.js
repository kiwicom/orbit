// @flow
import React from "react";
import { withTheme } from "theming";

import defaultTheme from "./defaultTheme";

// const defaultThemeProps = {
//   color: defaultTheme.color,
//   fontFamily: defaultTheme.fontFamily,
// };

type ComponentProps = {
  // theme: $Shape<typeof defaultTheme>,
  theme: typeof defaultTheme,
};

const Component = ({ theme }: ComponentProps) => (
  <div style={{ color: theme.color, fontFamily: theme.fontFamily }}>{theme.color}</div>
);

// We're passing a default theme for Component that aren't wrapped in the ThemeProvider
Component.defaultProps = {
  theme: defaultTheme, // eslint-disable-line react/default-props-match-prop-types
};

const ThemedComponent = withTheme(Component);
export { ThemedComponent as default, Component as RawComponent };
