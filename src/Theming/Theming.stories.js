// @flow
import React from "react";
import { storiesOf } from "@storybook/react";

import withTheme, { Theme } from "./WithTheme";
import ThemeProvider from "./ThemeProvider";
import ThemeSwitherSample from "./ThemeSwitcherSample";

const altTheme = {
  color: "green",
};

type ComponentProps = {
  theme: { [string]: string | number },
};

const Component = ({ theme }: ComponentProps) => (
  <div style={{ color: theme.color }}>{theme.color}</div>
);

const ThemableComponent = withTheme(Component);

storiesOf("Theming", module)
  .add("Without Theme", () => <Component theme={{ color: "darkgreen" }} />)
  .add("Default Theme", () => (
    <ThemeProvider>
      <ThemableComponent />
    </ThemeProvider>
  ))
  .add("Alt theme", () => (
    <ThemeProvider theme={altTheme}>
      <ThemableComponent />
    </ThemeProvider>
  ))
  .add("Theme switcher", () => (
    <ThemeSwitherSample>
      <ThemableComponent />
    </ThemeSwitherSample>
  ))
  .add("With theme component", () => (
    <ThemeProvider theme={altTheme}>
      <Theme>{theme => <Component theme={theme} />}</Theme>
    </ThemeProvider>
  ));
