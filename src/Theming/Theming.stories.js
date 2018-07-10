// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { defaultTokens as tokens } from "@kiwicom/orbit-design-tokens";

import ThemedComponent, { RawComponent } from "../Theming/ThemedSample";
import ThemeSwitcher from "./ThemeSwitcher";
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

// setAddon(chaptersAddon);

storiesOf("Theming", module)
  .addWithChapters("Without ThemeProvider", {
    subtitle: "Show how to use <RawComponent /> without <ThemeProvider>",
    chapters: [
      {
        sections: [
          {
            title: `RawComponent`,
            sectionFn: () => <RawComponent />,
          },
          {
            title: `RawComponent with props`,
            subtitle: `Provide alternate theme for component.
                       Note that theme have to contains all tokens and is created using Object.assign function.`,
            sectionFn: () => <RawComponent theme={altFullTheme} />,
          },
        ],
      },
    ],
  })

  .addWithChapters("With ThemeProvider", {
    subtitle: `Show how to use <ThemedSample /> component with <ThemeProvider>.
              Note that <WithTheme(ComponentWithTheme)/> = <ThemedSample /> in sources`,
    chapters: [
      {
        sections: [
          {
            title: `Basic usage`,
            subtitle: `Provider use default tokens`,
            sectionFn: () => (
              <ThemeProvider>
                <ThemedComponent />
              </ThemeProvider>
            ),
          },
          {
            title: `Alt theme`,
            subtitle: `Provide alternate theme for component using second ThemeProvider.
                       Note that altTheme can contains only some tokens.
                       This is usefull in development when you want to try defferent value for some value`,
            sectionFn: () => (
              <ThemeProvider theme={tokens}>
                <ThemeProvider theme={altTheme}>
                  <ThemedComponent />
                </ThemeProvider>
              </ThemeProvider>
            ),
          },
        ],
      },
    ],
  })

  .addWithChapters("ThemeSwitcher", {
    subtitle: `Show how to use <ThemedSample /> component with <ThemeSwitcher>. By clicking on ThemeSwitcher buttons you can enable/disable alternative themes`,
    chapters: [
      {
        sections: [
          {
            sectionFn: () => (
              <ThemeSwitcher themes={[altTheme, otherTheme]}>
                <ThemedComponent />
              </ThemeSwitcher>
            ),
          },
        ],
      },
    ],
  });
