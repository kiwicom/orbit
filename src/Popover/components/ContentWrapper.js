// @flow
import React, { useRef, useEffect, useContext, useMemo } from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

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
import { ModalContext } from "../../Modal/ModalContext";
import boundingClientRect from "../../utils/boundingClientRect";
import getScrollableParent from "../helpers/getScrollableParent";

const mobileTop = theme => theme.orbit.spaceXLarge;
const popoverPadding = theme => theme.orbit.spaceMedium;
const actionsSpace = theme => theme.orbit.spaceMedium;

const allSpacing = theme =>
  parseFloat(popoverPadding(theme)) * 2 +
  parseFloat(mobileTop(theme)) +
  parseFloat(actionsSpace(theme));

const StyledContentWrapper = styled.div`
  overflow: auto;
  max-height: ${({ actionsHeight, theme }) =>
    // Calculates all the spacing relative to viewport to get space for action box
    `calc(100vh - ${allSpacing(theme) + actionsHeight}px)`};

  ${media.largeMobile(css`
    max-height: 100%;
  `)}
`;

StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledActions = styled.div`
  margin-top: ${({ theme }) => actionsSpace(theme)};
`;

StyledActions.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverParent = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border-top-left-radius: 9px; /* TODO: Add token */
  border-top-right-radius: 9px; /* TODO: Add token */
  background-color: ${({ theme }) => theme.orbit.backgroundModal}; // TODO: Add token
  padding: ${({ noPadding, theme }) => (noPadding ? 0 : popoverPadding(theme))};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowRaisedReverse};
  z-index: 1000;
  transition: ${transition(["opacity", "transform"], "fast", "ease-in-out")};
  transform: translateY(${({ shownMobile }) => (shownMobile ? "0%" : "100%")});
  max-height: ${({ theme }) => `calc(100% - ${mobileTop(theme)})`};
  &:focus {
    outline: 0;
  }
  ${media.largeMobile(css`
    z-index: ${({ isInsideModal }) => (isInsideModal ? "1000" : "600")};
    position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ width }) => (width ? `${width}` : "auto")};
    opacity: ${({ shown }) => (shown ? "1" : "0")};
    transform: none;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    box-shadow: ${({ theme }) => theme.orbit.boxShadowRaised};
    max-height: none;
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
  background-color: ${({ theme }) => convertHexToRgba(theme.orbit.paletteInkNormal, 60)};
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
  padding: ${({ noPadding, theme }) => (noPadding ? popoverPadding(theme) : 0)};
  padding-top: ${({ theme }) => popoverPadding(theme)};

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
  fixed,
  actions,
}: Props) => {
  const { isInsideModal } = useContext(ModalContext);
  const popover: { current: React$ElementRef<*> } = useRef(null);
  const content: { current: React$ElementRef<*> } = useRef(null);
  const overlay: { current: React$ElementRef<*> } = useRef(null);
  const actionsRef: { current: React$ElementRef<*> } = useRef(null);
  const position = calculatePopoverPosition(preferredPosition, preferredAlign);
  const scrollableParent = useMemo(() => getScrollableParent(containerRef.current), [containerRef]);
  const dimensions = useDimensions({ containerRef, popover, content, fixed, scrollableParent });
  const verticalPosition = calculateVerticalPosition(position[0], dimensions);
  const horizontalPosition = calculateHorizontalPosition(position[1], dimensions);
  const actionsDimensions = useMemo(() => boundingClientRect(actionsRef), [actionsRef.current]);

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
      <StyledOverlay ref={overlay} shown={shown} isInsideModal={isInsideModal} />
      <StyledPopoverParent
        shownMobile={shown}
        shown={shown && verticalPosition && horizontalPosition}
        anchor={horizontalPosition}
        position={verticalPosition}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerPureTop={dimensions.containerPureTop}
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
        fixed={fixed}
        isInsideModal={isInsideModal}
      >
        <StyledPopoverContent ref={content}>
          <StyledContentWrapper actionsHeight={actionsDimensions && actionsDimensions.height}>
            {children}
          </StyledContentWrapper>
          {actions ? (
            <StyledActions ref={actionsRef}>{actions}</StyledActions>
          ) : (
            <StyledPopoverClose ref={actionsRef} noPadding={noPadding}>
              <Button type="secondary" fullWidth onClick={onClose}>
                <Translate tKey="button_close" />
              </Button>
            </StyledPopoverClose>
          )}
        </StyledPopoverContent>
      </StyledPopoverParent>
    </React.Fragment>
  );
};

export default PopoverContentWrapper;
