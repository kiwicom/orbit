// @flow
import React from "react";
import { withTheme } from "theming";
import tokens from "@kiwicom/orbit-design-tokens";

type ComponentProps = {
  theme: typeof tokens,
};

const Component = ({ theme }: ComponentProps) => (
  <div style={{ color: theme.colorTextPrimary, fontFamily: theme.fontFamily }}>
    {theme.colorTextPrimary}
  </div>
);

// We're passing a default theme for Component that aren't wrapped in the ThemeProvider
Component.defaultProps = {
  theme: tokens, // eslint-disable-line react/default-props-match-prop-types
};

// Themed component cannot be used without ThemeProvider
const ThemedComponent = withTheme(Component);
export { ThemedComponent as default, Component as RawComponent };
