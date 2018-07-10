// @flow
import * as React from "react";
import { defaultTokens as tokens } from "@kiwicom/orbit-design-tokens";

import ThemeProvider from "./ThemeProvider";
import type { Props } from "./ThemeSwitcher";

type State = {
  themeIndex: number,
};

export default class ThemeSwitcher extends React.Component<Props, State> {
  static defaultProps = {
    mainTheme: tokens,
  };

  state = {
    themeIndex: -1,
  };

  render() {
    const { themes, children, mainTheme } = this.props;
    const { themeIndex } = this.state;
    return (
      <React.Fragment>
        <form>
          {themes.map((t, i) => (
            <button
              type="button"
              key={i} // eslint-disable-line react/no-array-index-key
              onClick={() => this.setState({ themeIndex: i === themeIndex ? -1 : i })}
              style={{ background: i !== themeIndex ? "inherit" : "#eee" }}
            >
              {i}
            </button>
          ))}
        </form>
        <hr />
        {themeIndex === -1 ? (
          <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
        ) : (
          <ThemeProvider theme={mainTheme}>
            <ThemeProvider theme={themes[themeIndex]}>{children}</ThemeProvider>
          </ThemeProvider>
        )}
      </React.Fragment>
    );
  }
}
