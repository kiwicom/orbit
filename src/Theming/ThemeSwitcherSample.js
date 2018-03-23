// @flow
import React from "react";

import ThemeProvider from "./ThemeProvider";

const altTheme = {
  color: "green",
};

type ThemeProps = {
  children: any,
};

type ThemeState = {
  themeName: string,
};

export default class ThemeSwitherSample extends React.Component<ThemeProps, ThemeState> {
  state = {
    themeName: "dafault",
  };

  changeTheme = () => {
    this.setState(oldState => ({ themeName: oldState.themeName === "alt" ? "default" : "alt" }));
  };

  render() {
    const { themeName } = this.state;
    const themeProps = themeName === "alt" ? { theme: altTheme } : {};
    return (
      <form>
        <button type="button" onClick={this.changeTheme}>
          {themeName === "alt" ? "default" : "alt"}
        </button>
        <hr />
        <ThemeProvider {...themeProps}>{this.props.children}</ThemeProvider>
      </form>
    );
  }
}
