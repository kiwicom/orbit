// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "theming";

import ThemedSample, { RawComponent } from "../Theming/ThemedSample";
import ThemeSwither from "./ThemeSwitcher";
import defaultTheme from "../Theming/defaultTheme";

const altTheme = {
  color: "green",
};

const otherTheme = {
  color: "purple",
  fontFamily: "Times, serif",
};

storiesOf("CSS in JS Theming", module)
  .add("Without Theme using default props", () => <RawComponent />)
  .add("Without Theme with props", () => <RawComponent theme={defaultTheme} />)
  .add("Default Theme", () => (
    <ThemeProvider theme={defaultTheme}>
      <ThemedSample />
    </ThemeProvider>
  ))
  .add("Alt theme", () => (
    <ThemeProvider theme={defaultTheme}>
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
