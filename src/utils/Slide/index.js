// @flow
import React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";

import type { Props, State } from "./index";

const getMaxHeight = ({ maxHeight }) => {
  if (maxHeight === 0) return `0px`;
  if (!maxHeight) return undefined;
  return `${maxHeight}px`;
};

export const StyledSlide = styled.div`
  max-height: ${getMaxHeight};
  transition: max-height ${({ theme }) => theme.orbit.durationFast} linear;
`;

StyledSlide.defaultProps = {
  theme: defaultTheme,
};

class Slide extends React.Component<Props, State> {
  state = {
    maxHeight: 0,
  };

  expandTimeout = null;

  collapseTimeout = null;

  componentDidMount() {
    this.setMaxHeight();
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: null | true) {
    if (snapshot) {
      if (this.props.expanded) {
        this.setMaxHeight();
        if (typeof setTimeout === "function") {
          this.expandTimeout = setTimeout(this.expandCallback, 150);
        }
      } else {
        if (this.state.maxHeight !== this.props.maxHeight) {
          this.setMaxHeight();
        }
        if (typeof setTimeout === "function") {
          this.collapseTimeout = setTimeout(this.collapseCallback, 1);
        }
      }
    }
  }

  componentWillUnmount() {
    if (typeof clearTimeout === "function") {
      if (this.expandTimeout) {
        clearTimeout(this.expandTimeout);
      }
      if (this.collapseTimeout) {
        clearTimeout(this.collapseTimeout);
      }
    }
  }

  getSnapshotBeforeUpdate(prevProps: Props) {
    if (this.props.expanded === prevProps.expanded) return null;
    return true;
  }

  setMaxHeight = () => {
    const { maxHeight } = this.props;
    this.setState({
      maxHeight,
    });
  };

  expandCallback = () => {
    this.setState({
      maxHeight: null,
    });
  };

  collapseCallback = () => {
    this.setState({
      maxHeight: 0,
    });

    if (this.expandTimeout && typeof clearTimeout === "function") {
      clearTimeout(this.expandTimeout);
      this.expandTimeout = null;
    }
  };

  render() {
    const { children, expanded = false } = this.props;

    return (
      <StyledSlide maxHeight={this.state.maxHeight} expanded={expanded}>
        {children}
      </StyledSlide>
    );
  }
}

export default Slide;
