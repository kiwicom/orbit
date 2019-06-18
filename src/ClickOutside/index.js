// @flow
import * as React from "react";
import styled from "styled-components";

import type { Props } from "./index";

const Inner = styled.div`
  width: 100%;
`;

class ClickOutside extends React.PureComponent<Props> {
  node: { current: any | HTMLDivElement } = React.createRef();

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = (ev: MouseEvent) => {
    const { onClickOutside } = this.props;
    if (
      onClickOutside &&
      this.node?.current &&
      ev.target instanceof Node &&
      !this.node.current.contains(ev.target)
    ) {
      onClickOutside(ev);
    }
  };

  render() {
    const { children } = this.props;

    return <Inner ref={this.node}>{children}</Inner>;
  }
}

export default ClickOutside;
