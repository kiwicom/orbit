// @flow
import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverHorizontal from "../helpers/resolvePopoverHorizontal";
import calculatePopoverPosition from "../helpers/calculatePopoverPosition";
import calculateVerticalPosition from "../helpers/calculateVerticalPosition";
import calculateHorizontalPosition from "../helpers/calculateHorizontalPosition";
import type { Props } from "./ContentWrapper.js.flow";
import useDimensions from "../hooks/useDimensions";
import Translate from "../../Translate";
import transition from "../../utils/transition";
import useClickOutside from "../../hooks/useClickOutside";

const StyledPopoverParent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 9px; /* TODO: Add token */
  border-top-right-radius: 9px; /* TODO: Add token */
  background-color: ${({ theme }) => theme.orbit.backgroundModal}; // TODO: Add token
  padding: ${({ theme, noPadding }) => (noPadding ? 0 : theme.orbit.spaceMedium)};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  overflow: hidden;
  z-index: 1000;
  transition: ${transition(["opacity", "transform"], "fast", "ease-in-out")};
  transform: translateY(${({ shownMobile }) => (shownMobile ? "0%" : "100%")});
  &:focus {
    outline: 0;
  }
  ${media.largeMobile(css`
    position: absolute;
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ width }) => (width ? `${width}` : "auto")};
    opacity: ${({ shown }) => (shown ? "1" : "0")};
    transform: none;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};

    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
  `)}
`;

StyledPopoverParent.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverContent = styled.div``;

const StyledOverlay = styled.div`
  display: block;
  position: fixed;
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(23, 27, 30, 0.6); // TODO: token
  transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out;
  z-index: 999;

  ${media.largeMobile(css`
    display: none;
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
  preferredAlign,
  containerRef,
  noPadding,
  overlapped,
  shown,
}: Props) => {
  const popover: { current: React$ElementRef<*> } = useRef(null);
  const content: { current: React$ElementRef<*> } = useRef(null);
  const overlay: { current: React$ElementRef<*> } = useRef(null);
  const position = calculatePopoverPosition(preferredPosition, preferredAlign);
  const dimensions = useDimensions({ containerRef, popover, content });
  const verticalPosition = calculateVerticalPosition(position[0], dimensions);
  const horizontalPosition = calculateHorizontalPosition(position[1], dimensions);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (popover.current) {
        popover.current.focus();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useClickOutside(popover, onClose);

  return (
    <React.Fragment>
      <StyledOverlay ref={overlay} shown={shown} />
      <StyledPopoverParent
        shownMobile={shown}
        shown={shown && verticalPosition && horizontalPosition}
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
        tabIndex="0"
        data-test={dataTest}
        noPadding={noPadding}
        overlapped={overlapped}
        role="tooltip"
      >
        <StyledPopoverContent ref={content}>
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
