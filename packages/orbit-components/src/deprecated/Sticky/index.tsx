import React from "react";
import styled, { css } from "styled-components";

import { addScrollHandler, removeScrollHandler, getScrollingElement } from "../../utils/scroll";
import defaultTheme from "../../defaultTheme";
import type { Props, State } from "./types";

const StyledSticky = styled.div``;

const StyledStickyContent = styled.div<{
  sticky?: boolean;
  size: { width: number; height: number };
  initialWidth: number;
}>`
  position: ${({ sticky }) => (sticky ? `fixed` : `relative`)};
  ${({ size, initialWidth }) => css`
    top: ${size.height && `${size.height}px`};
    width: ${(size.width && !initialWidth && `${size.width}px`) || `100%`};
  `};
  box-shadow: 0 2px 20px 6px rgba(23, 27, 30, 0.15);
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
`;

StyledStickyContent.defaultProps = {
  theme: defaultTheme,
};

class Sticky extends React.Component<Props, State> {
  state: State = {
    sticky: false,
    height: 0,
    initialWidth: true,
    initialTop: 0,
    width: 0,
  };

  content = React.createRef<HTMLDivElement>();

  sticky = React.createRef<HTMLDivElement>();

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

  handleTop: () => void = () => {
    if (this.sticky.current) {
      const values = this.sticky.current.getBoundingClientRect();
      this.setState({
        initialTop: values.top,
      });
    }
  };

  stickyState: (sticky: boolean, height: number, width: number) => void = (
    sticky: boolean,
    height: number,
    width: number,
  ) => {
    this.setState({
      sticky,
      height,
      width,
    });
  };

  handleScroll: () => void = () => {
    const element = this.content.current;
    const sticky = this.sticky.current;
    const elementHeight = element?.offsetHeight;
    // @ts-expect-error suppressed until removed
    const parent = sticky?.parentNode?.getBoundingClientRect();
    const scrollingElement = getScrollingElement().getBoundingClientRect();

    const { offset = 0 } = this.props;
    const { initialTop } = this.state;

    this.setState({
      initialWidth: false,
    });

    // if (sets fixed position if window with offset reaches elements and current position is not on the bottom of parent element)
    if (
      Math.abs(scrollingElement.top) + offset >= initialTop &&
      // @ts-expect-error suppressed until removed
      parent.bottom - elementHeight - offset >= 0
    ) {
      this.stickyState(true, offset, parent.width);
      // turns off fixed if it's on the bottom of parent's element
      // @ts-expect-error suppressed until removed
    } else if (parent.bottom - elementHeight - offset <= 0) {
      // @ts-expect-error suppressed until remove
      this.stickyState(false, parent.height - elementHeight, parent.width);
    } else {
      // just off fixed
      this.stickyState(false, 0, parent.width);
    }
  };

  render() {
    const { children, dataTest, id } = this.props;
    const { sticky, height, width, initialWidth } = this.state;

    return (
      <StyledSticky ref={this.sticky} data-test={dataTest} id={id}>
        <StyledStickyContent
          sticky={sticky}
          size={{ height, width }}
          // @ts-expect-error suppressed until remove
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
