// @flow
import * as React from "react";
import { ThemeProvider } from "theming";
import defaultTheme from "orbit-design-token";

type ThemeProps = {
  children: any,
  mainTheme?: typeof defaultTheme,
  themes: any[],
};

type ThemeState = {
  themeIndex: number,
};

export default class ThemeSwitherSample extends React.Component<ThemeProps, ThemeState> {
  static defaultProps = {
    mainTheme: defaultTheme,
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
