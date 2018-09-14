// @flow
import * as React from "react";
import ReactDOM from "react-dom";

import type { Props } from "./index";

export default class Portal extends React.Component<Props> {
  // eslint-disable-next-line react/sort-comp
  node = document.getElementById(this.props.element || "modal");

  el = document.createElement("div");

  componentDidMount() {
    if (this.node) {
      this.node.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.node) {
      this.node.removeChild(this.el);
    }
  }

  render() {
    const { children } = this.props;

    return ReactDOM.createPortal(children, this.el);
  }
}
