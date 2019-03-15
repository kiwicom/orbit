// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { addScrollHandler, removeScrollHandler, getScrollingElement } from "../utils/scroll";
import defaultTokens from "../defaultTokens";

import type { Props, State } from "./index";

const StyledSticky = styled.div``;

const StyledStickyContent = styled.div`
  position: ${({ sticky }) => (sticky ? `fixed` : `relative`)};
  ${({ size, initialWidth }) => css`
    top: ${size.height && `${size.height}px`};
    width: ${(size.width && !initialWidth && `${size.width}px`) || `100%`};
  `};
  box-shadow: 0 2px 20px 6px rgba(23, 27, 30, 0.15);
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
`;

StyledStickyContent.defaultProps = {
  theme: defaultTokens,
};

class Sticky extends React.Component<Props, State> {
  state = {
    sticky: false,
    height: 0,
    initialWidth: true,
    initialTop: 0,
    width: 0,
  };

  componentDidMount() {
    this.handleTop();
    addScrollHandler(this.handleScroll);
    window.addEventListener("resize", this.handleTop);
    window.addEventListener("resize", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleTop);
    window.removeEventListener("resize", this.handleScroll);
    removeScrollHandler(this.handleScroll);
  }

  handleTop = () => {
    if (this.sticky?.current) {
      const values = this.sticky.current.getBoundingClientRect();
      this.setState({
        initialTop: values.top,
      });
    }
  };

  stickyState = (sticky: boolean, height: number, width: number) => {
    this.setState({
      sticky,
      height,
      width,
    });
  };

  handleScroll = () => {
    const element = this.content?.current;
    const sticky = this.sticky?.current;
    const elementHeight = element.offsetHeight;
    // $FlowFixMe
    const parent = sticky.parentNode.getBoundingClientRect();
    const scrollingElement = getScrollingElement().getBoundingClientRect();

    const { offset = 0 } = this.props;
    const { initialTop } = this.state;

    this.setState({
      initialWidth: false,
    });

    // if (sets fixed position if window with offset reaches elements and current position is not on the bottom of parent element)
    if (
      Math.abs(scrollingElement.top) + offset >= initialTop &&
      parent.bottom - elementHeight - offset >= 0
    ) {
      this.stickyState(true, offset, parent.width);
      // turns off fixed if it's on the bottom of parent's element
    } else if (parent.bottom - elementHeight - offset <= 0) {
      this.stickyState(false, parent.height - elementHeight, parent.width);
    } else {
      // just off fixed
      this.stickyState(false, 0, parent.width);
    }
  };

  content: {
    current: any | HTMLDivElement,
  } = React.createRef();
  sticky: {
    current: any | HTMLDivElement,
  } = React.createRef();

  render() {
    const { children } = this.props;
    const { sticky, height, width, initialWidth } = this.state;
    return (
      <StyledSticky ref={this.sticky}>
        <StyledStickyContent
          sticky={sticky}
          size={{ height, width }}
          initialWidth={initialWidth}
          ref={this.content}
        >
          {children}
        </StyledStickyContent>
      </StyledSticky>
    );
  }
}

export default Sticky;
