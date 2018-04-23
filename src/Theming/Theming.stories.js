// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import * as tokens from "@kiwicom/orbit-design-tokens";

import ThemedSample, { RawComponent } from "../Theming/ThemedSample";
import ThemeSwither from "./ThemeSwitcher";
import ThemeProvider from "./ThemeProvider";

const altTheme = {
  colorTextPrimary: "green",
};

const otherTheme = {
  colorTextPrimary: "purple",
  fontFamily: "Times, serif",
};

const altFullTheme = Object.assign({}, tokens, {
  colorTextPrimary: "red",
  fontFamily: "Courier",
});

storiesOf("Theming", module)
  .add("Without Theme using default props", () => <RawComponent />)
  .add("Without Theme with props", () => <RawComponent theme={altFullTheme} />)
  .add("Default Theme", () => (
    <ThemeProvider>
      <ThemedSample />
    </ThemeProvider>
  ))
  .add("Alt theme", () => (
    <ThemeProvider theme={tokens}>
      <ThemeProvider theme={altTheme}>
        <ThemedSample />
      </ThemeProvider>
    </ThemeProvider>
  ))
  .add("Theme switcher", () => (
    <ThemeSwither themes={[altTheme, otherTheme]}>
      <ThemedSample />
    </ThemeSwither>
  ));
