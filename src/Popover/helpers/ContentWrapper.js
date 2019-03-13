// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTokens from "../../defaultTokens";
import media from "../../utils/mediaQuery";
import { POSITIONS, ANCHOR } from "../consts";
import Button from "../../Button";

const resolvePopoverAnchor = ({
  anchor,
  containerTop,
  containerLeft,
  containerHeight,
  containerWidth,
  popoverHeight,
  popoverWidth,
}: Props) => {
  if (anchor === ANCHOR.START) {
    return css`
      left: ${Math.floor(containerLeft)}px;
    `;
  } else if (anchor === ANCHOR.END) {
    return css`
      left: ${Math.floor(containerLeft + containerWidth - popoverWidth)}px; // TODO: use token
    `;
  }
  return null;
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

const StyledPopoverParent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;

  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background-color: ${({ theme }) => theme.orbit.backgroundModal}; // TODO: Add token
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  padding-top: ${({ theme }) => theme.orbit.spaceMedium};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  z-index: ${({ theme }) => theme.orbit.zIndexOnTheTop};

  ${media.largeMobile(css`
    position: absolute;
    left: initial;
    right: initial;
    bottom: initial;
    width: auto;
    ${css`
      ${resolvePopoverPosition}
      ${resolvePopoverAnchor}
    `}
  `)}
`;
StyledPopoverParent.defaultProps = {
  theme: defaultTokens,
};

const StyledPopoverContent = styled.div`
  padding-bottom: ${({ theme }) => theme.orbit.spaceMedium};
  ${media.largeMobile(css`
    padding-bottom: 0;
  `)}
`;
StyledPopoverContent.defaultProps = {
  theme: defaultTokens,
};

const StyledOverlay = styled.div`
  display: block;
  background-color: red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.orbit.zIndexOnTheTop - 1};
  background-color: rgba(23, 27, 30, 0.6); // TODO: token

  ${media.largeMobile(css`
    display: none;
  `)}
`;
StyledOverlay.defaultProps = {
  theme: defaultTokens,
};

const StyledTooltipClose = styled.div`
  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
  `)}
`;
StyledTooltipClose.defaultProps = {
  theme: defaultTokens,
};

class PopoverContentWrapper extends React.PureComponent<Props, State> {
  state = {
    reRender: false,
    position: "",
    shownMobile: false,
    anchor: "",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setDimensions();

      const { preferredPosition, prefferedAnchorPosition } = this.props;

      const positions = Object.keys(POSITIONS).map(k => POSITIONS[k]);
      const anchor = Object.keys(ANCHOR).map(k => ANCHOR[k]);

      const defaultPosition = [
        ...[preferredPosition].filter(p => typeof p === "string"),
        ...positions.filter(p => p !== preferredPosition),
      ];

      const defaultAnchor = [
        ...[prefferedAnchorPosition].filter(p => typeof p === "string"),
        ...anchor.filter(p => p !== prefferedAnchorPosition),
      ];

      this.setPosition(defaultPosition, defaultAnchor);
    });
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
    }
  }

  setPosition = (desiredPositions: Positions[], desiredAnchor) => {
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
      } else if (p === ANCHOR.START && canBeAnchorLeft) {
        return ANCHOR.START;
      } else if (p === ANCHOR.END && canBeAnchorRight) {
        return ANCHOR.END;
      }
      return false;
    };

    const possiblePositions = desiredPositions
      .map(p => isInside(p))
      // filter all non string values
      .filter(p => typeof p === "string");

    const possibleAnchor = desiredAnchor.map(p => isInside(p)).filter(p => typeof p === "string");

    // set the first valid position
    // ordering in POSITIONS const is important
    const position = possiblePositions[0];
    if (typeof position === "string" && this.state.position !== position) {
      this.setState({ position });
    }

    const anchor = possibleAnchor[0];
    if (typeof anchor === "string" && this.state.anchor !== anchor) {
      this.setState({ anchor });
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
    const { position, anchor, shownMobile } = this.state;
    const {
      containerTop,
      containerLeft,
      containerHeight,
      containerWidth,
      popoverHeight,
      popoverWidth,
    } = this;
    const { shown, content, handleClickContent, closeText = "Close", handleClose } = this.props;
    return (
      <React.Fragment>
        <StyledPopoverParent
          shown={shown}
          shownMobile={shownMobile}
          anchor={anchor}
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
          <StyledPopoverContent ref={this.content}>{content}</StyledPopoverContent>
          <StyledTooltipClose>
            <Button type="secondary" block onClick={handleClose}>
              {closeText}
            </Button>
          </StyledTooltipClose>
        </StyledPopoverParent>
        <StyledOverlay />
      </React.Fragment>
    );
  }
}

export default PopoverContentWrapper;
