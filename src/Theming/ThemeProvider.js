/* @flow */
import * as React from "react";
import PropTypes from "prop-types";

import defaultTheme from "./defaultTheme.json";

type Props = {
  theme?: { [key: string]: string | number },
  children: React.Node,
};

export default class ThemeProvider extends React.Component<Props> {
  static childContextTypes = {
    theme: PropTypes.object.isRequired,
  };

  getChildContext() {
    return {
      theme: this.props.theme || defaultTheme,
    };
  }

  render() {
    return this.props.children;
  }
}
