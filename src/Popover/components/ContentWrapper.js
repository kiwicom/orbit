// @flow
import React, { useState, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import defaultTokens from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { POSITIONS, ANCHORS } from "../consts";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverAnchor from "../helpers/resolvePopoverAnchor";
import type { Props } from "./ContentWrapper.js.flow";
import type { Positions, Anchors, Dimensions } from "../index.js.flow";

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

  &:focus {
    outline: 0;
  }

  ${media.largeMobile(css`
    position: absolute;
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ width }) => (width ? `${width}px` : "auto")};
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

const PopoverContentWrapper = ({
  children,
  closeText,
  onClose,
  width,
  dataTest,
  preferredPosition,
  containerRef,
}: Props) => {
  const [positions, setPositions] = useState({
    containerTop: 0,
    containerLeft: 0,
    containerHeight: 0,
    containerWidth: 0,
    popoverHeight: 0,
    popoverWidth: 0,
    windowWidth: 0,
    windowHeight: 0,
    contentHeight: 0,
  });
  const [positionDirection, setPositionDirection] = useState<string>("bottom");
  const [anchor, setAnchor] = useState<string>("start");

  const popover: { current: any | HTMLDivElement } = useRef(null);
  const content: { current: any | HTMLDivElement } = useRef(null);
  const overlay: { current: any | HTMLDivElement } = useRef(null);

  const getDimensions = () => {
    if (containerRef && popover && content && typeof window !== "undefined") {
      const containerDimensions = containerRef.getBoundingClientRect(); // props.containerRef is passed with .current
      const popoverDimensions = popover.current.getBoundingClientRect();

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

      const contentHeight = content.current && content.current.getBoundingClientRect().height;

      return {
        containerTop,
        containerLeft,
        containerHeight,
        containerWidth,
        popoverHeight,
        popoverWidth,
        windowWidth,
        windowHeight,
        contentHeight,
      };
    }
    return null;
  };

  const setAnchorPosition = (
    desiredPositions: Positions[],
    desiredAnchor: Anchors[],
    pos: Dimensions,
  ) => {
    const canBePositionTop = pos.containerTop - pos.popoverHeight > 0;
    const canBePositionBottom =
      pos.containerTop + pos.containerHeight + pos.popoverHeight < pos.windowHeight;

    const canBeAnchorLeft = pos.containerLeft + pos.popoverWidth < pos.windowWidth;
    const canBeAnchorRight = pos.containerLeft + pos.containerWidth >= pos.popoverWidth;
    // returns the position name if the position can be set
    const isInside = (p: Positions) => {
      if (p === POSITIONS.TOP && canBePositionTop) {
        return POSITIONS.TOP;
      }
      if (p === POSITIONS.BOTTOM && canBePositionBottom) {
        return POSITIONS.BOTTOM;
      }
      return false;
    };

    const isInsideAnchor = (p: Anchors) => {
      if (p === ANCHORS.START && canBeAnchorLeft) {
        return ANCHORS.START;
      }
      if (p === ANCHORS.END && canBeAnchorRight) {
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
    const posPosition = possiblePositions[0];
    if (typeof posPosition === "string") {
      setPositionDirection(posPosition);
    }

    const posAnchor = possibleAnchor[0];
    if (typeof posAnchor === "string") {
      setAnchor(posAnchor);
    }
  };

  const calculatePopoverPosition = () => {
    const mappedPositions = Object.keys(POSITIONS).map(k => POSITIONS[k]);
    const anchors = Object.keys(ANCHORS).map(k => ANCHORS[k]);

    if (preferredPosition) {
      return [
        [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
        anchors,
      ];
      // setAnchorPosition(
      //   [preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)],
      //   anchors,
      // );
    }
    return [[preferredPosition, ...mappedPositions.filter(p => p !== preferredPosition)], anchors];
  };

  const handleResize = () => {
    const dimensions = getDimensions();
    const popPos = calculatePopoverPosition();

    if (dimensions) {
      setAnchorPosition(popPos[0], popPos[1], dimensions);
      setPositions(dimensions);
    }
  };

  const handleClick = (ev: SyntheticEvent<HTMLElement>) => {
    ev.stopPropagation();

    if (ev.target === overlay?.current) {
      onClose();
    }
  };

  useEffect(() => {
    // On mount effect
    handleResize();
    popover.current.focus();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      <StyledPopoverParent
        anchor={anchor}
        position={positionDirection}
        containerTop={positions.containerTop}
        containerLeft={positions.containerLeft}
        containerHeight={positions.containerHeight}
        containerWidth={positions.containerWidth}
        popoverHeight={positions.popoverHeight}
        popoverWidth={positions.popoverWidth}
        width={width}
        ref={popover}
        onClick={handleClick}
        tabIndex="0"
        data-test={dataTest}
      >
        <StyledPopoverContent ref={content}>
          {children}
          <StyledTooltipClose>
            <Button type="secondary" block onClick={onClose}>
              {closeText || "Close"}
            </Button>
          </StyledTooltipClose>
        </StyledPopoverContent>
      </StyledPopoverParent>
      <StyledOverlay ref={overlay} onClick={handleClick} />
    </React.Fragment>
  );
};

export default PopoverContentWrapper;
