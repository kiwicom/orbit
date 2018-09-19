// @flow
import * as React from "react";
import styled from "styled-components";

import type { Props } from "./index";

const Inner = styled.div`
  width: 100%;
`;

class ClickOutside extends React.PureComponent<Props> {
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
      this.node &&
      ev.target instanceof Node &&
      !this.node.contains(ev.target)
    ) {
      onClickOutside(ev);
    }
  };

  node: ?HTMLDivElement;

  render() {
    const { children } = this.props;

    return (
      <Inner
        innerRef={node => {
          this.node = node;
        }}
      >
        {children}
      </Inner>
    );
  }
}

export default ClickOutside;
