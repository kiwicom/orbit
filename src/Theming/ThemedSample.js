// @flow
import * as React from "react";
import tokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

type ComponentProps = {
  theme: typeof tokens,
};

const ComponentWithTheme = ({ theme }: ComponentProps) => (
  <div
    style={{
      color: theme.colorTextPrimary,
      fontFamily: theme.fontFamily,
      lineHeight: theme.lineHeightText,
    }}
  >
    colorTextPrimary: {theme.colorTextPrimary}
    <br />
    fontFamily: {theme.fontFamily}
    <br />
    lineHeightText: {theme.lineHeightText}
    <br />
  </div>
);

// We're passing a default theme for Component that aren't wrapped in the ThemeProvider
ComponentWithTheme.defaultProps = {
  theme: tokens,
};

// Themed component cannot be used without ThemeProvider
const ThemedComponent = withTheme(ComponentWithTheme);
ThemedComponent.displayName = "ThemedComponent";

export { ThemedComponent as default, ComponentWithTheme as RawComponent };
