// @flow
import React, { useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverHorizontal from "../helpers/resolvePopoverHorizontal";
import calculatePopoverPosition from "../helpers/calculatePopoverPosition";
import type { Props } from "./ContentWrapper.js.flow";
import useDimensions from "../hooks/useDimensions";
import useVerticalPosition from "../hooks/useVerticalPosition";
import useHorizontalPosition from "../hooks/useHorizontalPosition";
import Translate from "../../Translate";
import arrowStyle from "../helpers/arrowStyle";
import resolvePopoverArrowPosition from "../helpers/resolvePopoverArrowPosition";
import resolvePopoverArrowAlign from "../helpers/resolvePopoverArrowAlign";
import { POPOVER_ARROW_SIZE } from "../consts";

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
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  /* border: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal}; */

  z-index: 1000;

  &:focus {
    outline: 0;
  }
  ${media.largeMobile(css`
    position: absolute;
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ width }) => (width ? `${width}` : "auto")};
    animation: ${opacityAnimation} ${({ theme }) => theme.orbit.durationFast} linear;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
  `)}
`;

StyledPopoverParent.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverArrow = styled.div`
  display: none;
  position: absolute;

  ${arrowStyle};
  width: ${POPOVER_ARROW_SIZE}px;
  height: ${POPOVER_ARROW_SIZE}px;
  transform: rotate(45deg);
  background-color: ${({ theme }) => theme.orbit.backgroundModal};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  z-index: -1;

  ${resolvePopoverArrowPosition};
  ${resolvePopoverArrowAlign};

  ${media.largeMobile(css`
    display: block;
  `)};
`;

StyledPopoverArrow.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverContent = styled.div`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.orbit.spaceSmall)};
  padding-top: ${({ theme, noPadding }) => (noPadding ? 0 : theme.orbit.spaceMedium)};
  z-index: 2;
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.orbit.spaceMedium)};
  background-color: ${({ theme }) => theme.orbit.backgroundModal}; /* TODO: Add token */
`;
StyledPopoverContent.defaultProps = {
  theme: defaultTheme,
};

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
  z-index: 999;

  ${media.largeMobile(css`
    background-color: transparent;
  `)};
`;
StyledOverlay.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverClose = styled.div`
  padding: ${({ theme, noPadding }) => (noPadding ? theme.orbit.spaceMedium : 0)};
  padding-top: ${({ theme }) => theme.orbit.spaceMedium};

  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
    padding-bottom: 0;
  `)}
`;
StyledPopoverClose.defaultProps = {
  theme: defaultTheme,
};

const PopoverContentWrapper = ({
  children,
  onClose,
  width,
  dataTest,
  preferredPosition,
  containerRef,
  noPadding,
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
        noPadding={noPadding}
        role="tooltip"
      >
        <StyledPopoverArrow
          anchor={horizontalPosition}
          position={verticalPosition}
          containerTop={dimensions.containerTop}
          containerLeft={dimensions.containerLeft}
          containerHeight={dimensions.containerHeight}
          containerWidth={dimensions.containerWidth}
          popoverHeight={dimensions.popoverHeight}
          popoverWidth={dimensions.popoverWidth}
          width={width}
        />
        <StyledPopoverContent ref={content} noPadding={noPadding}>
          {children}
          <StyledPopoverClose noPadding={noPadding}>
            <Button type="secondary" block onClick={onClose}>
              <Translate tKey="button_close" />
            </Button>
          </StyledPopoverClose>
        </StyledPopoverContent>
      </StyledPopoverParent>
    </React.Fragment>
  );
};

export default PopoverContentWrapper;
