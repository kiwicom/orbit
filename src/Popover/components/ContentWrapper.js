// @flow
import React, { useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import defaultTokens from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverHorizontal from "../helpers/resolvePopoverHorizontal";
import calculatePopoverPosition from "../helpers/calculatePopoverPosition";
import type { Props } from "./ContentWrapper.js.flow";
import useDimensions from "../hooks/useDimensions";
import useVerticalPosition from "../hooks/useVerticalPosition";
import useHorizontalPosition from "../hooks/useHorizontalPosition";

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
  border-top-left-radius: 9px; /* TODO: Add token */
  border-top-right-radius: 9px; /* TODO: Add token */
  animation: ${showAnimation} ${({ theme }) => theme.orbit.durationFast} linear;
  background-color: ${({ theme }) => theme.orbit.backgroundModal}; // TODO: Add token
  padding: ${({ theme, hasPadding }) => (hasPadding ? theme.orbit.spaceSmall : 0)};
  padding-top: ${({ theme, hasPadding }) => (hasPadding ? theme.orbit.spaceMedium : 0)};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};

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
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
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
  padding: ${({ theme, hasPadding }) => (hasPadding ? 0 : theme.orbit.spaceSmall)};
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
  hasPadding,
}: Props) => {
  const popover: { current: React$ElementRef<*> } = useRef(null);
  const content: { current: React$ElementRef<*> } = useRef(null);
  const overlay: { current: React$ElementRef<*> } = useRef(null);
  const position = calculatePopoverPosition(preferredPosition);
  const dimensions = useDimensions({ containerRef, popover, content });
  const verticalPosition = useVerticalPosition(position[0], dimensions);
  const horizontalPosition = useHorizontalPosition(position[1], dimensions);

  const handleClick = (ev: SyntheticEvent<HTMLElement>) => {
    ev.stopPropagation();

    if (ev.target === overlay?.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (popover.current) {
      popover.current.focus();
    }
  }, []);

  return (
    <React.Fragment>
      <StyledOverlay ref={overlay} onClick={handleClick} />
      <StyledPopoverParent
        anchor={horizontalPosition}
        position={verticalPosition}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        popoverHeight={dimensions.popoverHeight}
        popoverWidth={dimensions.popoverWidth}
        width={width}
        ref={popover}
        onClick={handleClick}
        tabIndex="0"
        data-test={dataTest}
        hasPadding={hasPadding}
      >
        <StyledPopoverContent ref={content}>
          {children}
          <StyledTooltipClose hasPadding={hasPadding}>
            <Button type="secondary" block onClick={onClose}>
              {closeText || "Close"}
            </Button>
          </StyledTooltipClose>
        </StyledPopoverContent>
      </StyledPopoverParent>
    </React.Fragment>
  );
};

export default PopoverContentWrapper;
