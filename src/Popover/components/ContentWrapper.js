// @flow
import React, { useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import defaultTokens from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { POSITIONS, ANCHORS } from "../consts";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverAnchor from "../helpers/resolvePopoverAnchor";
import calculatePopoverPosition from "../helpers/calculatePopoverPosition";
import type { Props } from "./ContentWrapper.js.flow";
import useDimensions from "../hooks/useDimensions";
import useVerticalPosition from "../hooks/useVerticalPosition";
import useAnchorPosition from "../hooks/useAnchorPosition";

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
  const popover: { current: any | HTMLDivElement } = useRef(null);
  const content: { current: any | HTMLDivElement } = useRef(null);
  const overlay: { current: any | HTMLDivElement } = useRef(null);
  const position = calculatePopoverPosition(POSITIONS, ANCHORS, preferredPosition);
  const dimensions = useDimensions({ containerRef, popover, content });
  const verticalPosition = useVerticalPosition(position[0], dimensions);
  const anchorPosition = useAnchorPosition(position[1], dimensions);

  const handleClick = (ev: SyntheticEvent<HTMLElement>) => {
    ev.stopPropagation();

    if (ev.target === overlay?.current) {
      onClose();
    }
  };

  useEffect(() => {
    popover.current.focus();
  }, []);

  return (
    <React.Fragment>
      <StyledPopoverParent
        anchor={anchorPosition}
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
