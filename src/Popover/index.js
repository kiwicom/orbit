// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../defaultTokens";
import Portal from "../Portal";
import ClickOutside from "../ClickOutside";

import { POSITIONS } from "./consts";
import type { Props } from "./index";

const resolvePopoverAnchor = ({
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  PopoverHeight,
  PopoverWidth,
}: Props) => {
  return css`
    left: ${Math.floor(containerLeft)}px;
  `;
};

const resolvePopoverPosition = ({
  position,
  containerTop,
  containerHeight,
  popoverHeight,
}: Props) => {
  if (position === POSITIONS.TOP) {
    return css`
      top: ${Math.floor(containerTop - popoverHeight)}px; // TODO: use token
    `;
  } else if (position === POSITIONS.BOTTOM) {
    return css`
      top: ${Math.floor(containerTop + containerHeight)}px; // TODO: use token
    `;
  }
  return null;
};

const PopoverChild = styled.div`
  position: relative;
`;
PopoverChild.defaultProps = {
  theme: defaultTokens,
};

const PopoverContent = styled.div``;
PopoverContent.defaultProps = {
  theme: defaultTokens,
};

const PopoverParent = styled.div`
  position: absolute;
  ${css`
    ${resolvePopoverPosition}
    ${resolvePopoverAnchor}
  `}
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background-color: ${({ theme }) => theme.orbit.backgroundModal}; // TODO: Add token
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  padding-top: ${({ theme }) => theme.orbit.spaceMedium};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  z-index: ${({ theme }) => theme.orbit.zIndexOnTheTop};
`;
PopoverParent.defaultProps = {
  theme: defaultTokens,
};

class Popover extends React.PureComponent<Props, State> {
  state = {
    shown: false,
  };

  handleIn = () => {
    this.setState({ shown: true });
  };

  handleOut = () => {
    this.setState({ shown: false });
  };

  handleClick = () => {
    this.setState({ shown: !this.state.shown });
  };

  handleClickOutside = () => {
    this.timeOutOutside = setTimeout(() => {
      this.setState({ shown: false });
    });
  };

  handleClickContent = () => {
    clearTimeout(this.timeOutOutside);
  };

  container: { current: any | HTMLDivElement } = React.createRef();

  render() {
    const { shown } = this.state;
    const { children, content, preferedPosition, preferedAnchorPosition } = this.props;
    const { handleClickContent } = this;

    return (
      <React.Fragment>
        <PopoverChild onClick={this.handleClick} ref={this.container}>
          <ClickOutside onClickOutside={this.handleClickOutside}>{children}</ClickOutside>
        </PopoverChild>
        {shown && (
          <Portal>
            <PopoverContentWrapper
              containerRef={this.container}
              content={content}
              handleClickContent={handleClickContent}
              preferedPosition={preferedPosition}
              preferedAnchorPosition={preferedAnchorPosition}
            />
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

class PopoverContentWrapper extends React.PureComponent<Props, State> {
  state = {
    reRender: false,
    position: "",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setDimensions();
      this.setPosition([this.props.preferedPosition]);
    }, 10);
  }

  setDimensions() {
    if (
      this.props.containerRef.current &&
      this.popover &&
      this.content &&
      typeof window !== "undefined"
    ) {
      const containerDimensions = this.props.containerRef.current.getBoundingClientRect();
      const popoverDimensions = this.popover.current.getBoundingClientRect();

      // container positions and dimensions for calculation
      const containerTop = containerDimensions.top;
      const containerLeft = containerDimensions.left;
      const containerHeight = containerDimensions.height;
      const containerWidth = containerDimensions.width;

      // popover dimensions for calculation
      const popoverHeight = popoverDimensions.height;
      const popoverWidth = popoverDimensions.width;

      // window dimensions for calculation
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      this.containerTop = containerTop;
      this.containerLeft = containerLeft;
      this.containerHeight = containerHeight;
      this.containerWidth = containerWidth;
      this.popoverHeight = popoverHeight;
      this.popoverWidth = popoverWidth;
      this.windowWidth = windowWidth;
      this.windowHeight = windowHeight;

      this.contentHeight =
        this.content.current && this.content.current.getBoundingClientRect().height;

      // TODO: Better probably to put the satic vars of sizes to state
      this.setState({ reRender: !this.state.reRender });
    }
  }

  setPosition = (desiredPositions: Positions[]) => {
    const { containerTop, containerHeight, popoverHeight, windowHeight } = this;

    const canBePositionTop = containerTop - popoverHeight > 0;
    const canBePositionBottom = containerTop + containerHeight + popoverHeight < windowHeight;

    // returns the position name if the position can be set
    const isInside = (p: Positions) => {
      if (p === POSITIONS.TOP && canBePositionTop) {
        return "top";
      } else if (p === POSITIONS.BOTTOM && canBePositionBottom) {
        return "bottom";
      }
      return false;
    };

    const possiblePositions = desiredPositions
      .map(p => isInside(p))
      // filter all non string values
      .filter(p => typeof p === "string");

    // set the first valid position
    // ordering in POSITIONS const is important
    const position = possiblePositions[0];
    if (typeof position === "string" && this.state.position !== position) {
      this.setState({ position });
      // this.setAlign(position);
    }
  };

  containerTop: number = 0;
  containerLeft: number = 0;
  containerHeight: number = 0;
  containerWidth: number = 0;
  popoverWidth: number = 0;
  popoverHeight: number = 0;
  windowWidth: number = 0;
  windowHeight: number = 0;
  contentHeight: number = 0;

  popover: { current: any | HTMLDivElement } = React.createRef();
  content: { current: any | HTMLDivElement } = React.createRef();

  render() {
    const { position } = this.state;
    const {
      containerTop,
      containerLeft,
      containerHeight,
      containerWidth,
      popoverHeight,
      popoverWidth,
    } = this;
    const { shown, content, handleClickContent } = this.props;
    return (
      <PopoverParent
        shown={shown}
        position={position}
        containerTop={containerTop}
        containerLeft={containerLeft}
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        popoverHeight={popoverHeight}
        popoverWidth={popoverWidth}
        ref={this.popover}
        reRender={this.state.reRender}
        onClick={handleClickContent}
        tabIndex="0"
      >
        <PopoverContent ref={this.content}>{content}</PopoverContent>
      </PopoverParent>
    );
  }
}

export default Popover;
