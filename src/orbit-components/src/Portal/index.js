// @flow
import * as React from "react";
import ReactDOM from "react-dom";

import type { Props } from "./index";

export default class Portal extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    if (typeof window !== "undefined") {
      this.node =
        this.props.element && document.getElementById(this.props.element)
          ? document.getElementById(this.props.element)
          : document.body;
      this.el = document.createElement("div");
    }
  }

  componentDidMount() {
    if (this.node && this.el) {
      this.node.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.node && this.el) {
      this.node.removeChild(this.el);
    }
  }

  node: ?HTMLElement;

  el: ?HTMLElement;

  render() {
    const { children } = this.props;
    if (typeof window !== "undefined" && this.el) {
      return ReactDOM.createPortal(children, this.el);
    }
    return null;
  }
}
