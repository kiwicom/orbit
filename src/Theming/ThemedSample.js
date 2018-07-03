// @flow
import * as React from "react";
import tokens from "@kiwicom/orbit-design-tokens";
import { withTheme } from "theming";

import type { Props } from "./ThemedSample";

const ComponentWithTheme = ({ theme }: Props) => (
  <div
    style={{
      color: theme && theme.colorTextPrimary,
      fontFamily: theme && theme.fontFamily,
      lineHeight: theme && theme.lineHeightText,
    }}
  >
    colorTextPrimary: {theme && theme.colorTextPrimary}
    <br />
    fontFamily: {theme && theme.fontFamily}
    <br />
    lineHeightText: {theme && theme.lineHeightText}
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
