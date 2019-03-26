// @flow
import * as React from "react";
import styled, { css, keyframes } from "styled-components";

import defaultTokens from "../../defaultTokens";
import media from "../../utils/mediaQuery";
import { POSITIONS, ANCHORS } from "../consts";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverAnchor from "../helpers/resolvePopoverAnchor";
import type { Props, State } from "./ContentWrapper.js.flow";
import type { Positions, Anchors } from "../index.js.flow";

const showAnimation = keyframes`
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
`;

const opacityAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const StyledPopoverParent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  animation: ${showAnimation} ${({ theme }) => theme.orbit.durationFast} linear;

  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background-color: ${({ theme }) => theme.orbit.backgroundModal}; // TODO: Add token
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  padding-top: ${({ theme }) => theme.orbit.spaceMedium};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  z-index: ${({ theme }) => theme.orbit.zIndexOnTheTop};

  ${media.largeMobile(css`
    position: absolute;
    left: auto;
    right: auto;
    bottom: auto;
    width: auto;
    animation: ${opacityAnimation} ${({ theme }) => theme.orbit.durationFast} linear;
    ${resolvePopoverPosition}
    ${resolvePopoverAnchor}
  `)}
`;
StyledPopoverParent.defaultProps = {
  theme: defaultTokens,
};

const StyledPopoverContent = styled.div``;

const StyledOverlay = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.orbit.zIndexOnTheTop - 1};
  background-color: rgba(23, 27, 30, 0.6); // TODO: token
  animation: ${opacityAnimation} ${({ theme }) => theme.orbit.durationFast} ease-in;

  ${media.largeMobile(css`
    background-color: transparent;
  `)};
`;
StyledOverlay.defaultProps = {
  theme: defaultTokens,
};

const StyledTooltipClose = styled.div`
  padding-top: ${({ theme }) => theme.orbit.spaceMedium};

  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
    padding-bottom: 0;
  `)}
`;

StyledTooltipClose.defaultProps = {
  theme: defaultTokens,
};
class PopoverContentWrapper extends React.PureComponent<Props, State> {
  state = {
    position: "",
    anchor: "start",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setDimensions();

      const { preferredPosition } = this.props;

      const positions = Object.keys(POSITIONS).map(k => POSITIONS[k]);
      const anchors = Object.keys(ANCHORS).map(k => ANCHORS[k]);

      if (preferredPosition) {
        this.setPosition(
          [preferredPosition, ...positions.filter(p => p !== preferredPosition)],
          anchors,
        );
      } else {
        this.setPosition(positions, anchors);
      }
    });
  }

  setDimensions() {
    if (this.props.containerRef && this.popover && this.content && typeof window !== "undefined") {
      const containerDimensions = this.props.containerRef.getBoundingClientRect(); // this.props.containerRef is passed with .current
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
    }
  }

  setPosition(desiredPositions: Positions[], desiredAnchor: Anchors[]) {
    const {
      containerTop,
      containerLeft,
      containerWidth,
      containerHeight,
      popoverHeight,
      popoverWidth,
      windowHeight,
      windowWidth,
    } = this;

    const canBePositionTop = containerTop - popoverHeight > 0;
    const canBePositionBottom = containerTop + containerHeight + popoverHeight < windowHeight;

    const canBeAnchorLeft = containerLeft + popoverWidth < windowWidth;
    const canBeAnchorRight = containerLeft + containerWidth >= popoverWidth;
    // returns the position name if the position can be set
    const isInside = (p: Positions) => {
      if (p === POSITIONS.TOP && canBePositionTop) {
        return POSITIONS.TOP;
      } else if (p === POSITIONS.BOTTOM && canBePositionBottom) {
        return POSITIONS.BOTTOM;
      }
      return false;
    };

    const isInsideAnchor = (p: Anchors) => {
      if (p === ANCHORS.START && canBeAnchorLeft) {
        return ANCHORS.START;
      } else if (p === ANCHORS.END && canBeAnchorRight) {
        return ANCHORS.END;
      }
      return false;
    };

    const possiblePositions = desiredPositions
      .map(p => isInside(p))
      // filter all non string values
      .filter(p => typeof p === "string");

    const possibleAnchor = desiredAnchor
      .map(p => isInsideAnchor(p))
      .filter(p => typeof p === "string");

    // set the first valid position
    // ordering in POSITIONS const is important
    const position = possiblePositions[0];
    if (typeof position === "string") {
      this.setState({ position });
    }

    const anchor = possibleAnchor[0];
    if (typeof anchor === "string") {
      this.setState({ anchor });
    }
  }

  handleClick = (ev: SyntheticEvent<HTMLElement>) => {
    ev.stopPropagation();

    if (ev.target === this.overlay?.current) {
      this.props.onClose();
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
  overlay: { current: any | HTMLDivElement } = React.createRef();

  render() {
    const { position, anchor } = this.state;
    const { children, closeText = "Close", onClose } = this.props;
    return (
      <React.Fragment>
        <StyledPopoverParent
          anchor={anchor}
          position={position}
          containerTop={this.containerTop}
          containerLeft={this.containerLeft}
          containerHeight={this.containerHeight}
          containerWidth={this.containerWidth}
          popoverHeight={this.popoverHeight}
          popoverWidth={this.popoverWidth}
          ref={this.popover}
          onClick={this.handleClick}
          tabIndex="0"
        >
          <StyledPopoverContent ref={this.content}>
            {children}
            <StyledTooltipClose>
              <Button type="secondary" block onClick={onClose}>
                {closeText}
              </Button>
            </StyledTooltipClose>
          </StyledPopoverContent>
        </StyledPopoverParent>
        <StyledOverlay ref={this.overlay} onClick={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default PopoverContentWrapper;
