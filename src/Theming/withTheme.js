/* @flow */
import * as React from "react";
import PropTypes from "prop-types";

import defaultTheme from "./defaultTheme.json";

type SuppliedProps = {
  locale: string,
};

function withTheme<T>(Component: React.ComponentType<T>) {
  const WithTheme = (props: T, context: SuppliedProps) =>
    React.createElement(
      Component,
      Object.assign({}, props, {
        theme: context.theme || defaultTheme,
      }),
    );

  WithTheme.displayName = `WithTheme(${Component.displayName || Component.name || "Component"})`;

  WithTheme.contextTypes = {
    theme: PropTypes.object,
  };

  WithTheme.WrappedComponent = Component;

  return WithTheme;
}

export default withTheme;

type ThemeProps = {
  children: any,
};

export class Theme extends React.PureComponent<ThemeProps> {
  static contextTypes = {
    theme: PropTypes.object,
  };

  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  render() {
    const theme = this.context.theme || defaultTheme;
    return this.props.children(theme);
  }
}
