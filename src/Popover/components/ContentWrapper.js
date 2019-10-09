// @flow
import React, { useRef, useEffect, useContext } from "react";
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
  box-shadow: ${({ theme }) => theme.orbit.boxShadowRaisedReverse};
  overflow: hidden;
  z-index: ${({ theme }) => theme.orbit.zIndexPopover};
  transition: ${transition(["opacity", "transform"], "fast", "ease-in-out")};
  transform: translateY(${({ shownMobile }) => (shownMobile ? "0%" : "100%")});
  max-height: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  overflow-y: scroll;
  &:focus {
    outline: 0;
  }
  ${media.largeMobile(css`
    z-index: ${({ isInsideModal, theme }) =>
      isInsideModal ? theme.orbit.zIndexPopover : theme.orbit.zIndexFloatingAction};
    position: ${({ fixed }) => (fixed ? "fixed" : "absolute")};
    left: auto;
    right: auto;
    bottom: auto;
    width: ${({ width }) => (width ? `${width}` : "auto")};
    opacity: ${({ shown }) => (shown ? "1" : "0")};
    transform: none;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    overflow: auto;
    box-shadow: ${({ theme }) => theme.orbit.boxShadowRaised};

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
  z-index: ${({ theme }) => theme.orbit.zIndexPopoverOverlay};

  ${media.largeMobile(css`
    display: none;
    z-index: ${({ isInsideModal, theme }) =>
      isInsideModal ? theme.orbit.zIndexPopoverOverlay : parseFloat(theme.orbit.zIndexPopover) - 1};
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
  fixed,
  actions,
}: Props) => {
  const { isInsideModal } = useContext(ModalContext);
  const popover: { current: React$ElementRef<*> } = useRef(null);
  const content: { current: React$ElementRef<*> } = useRef(null);
  const overlay: { current: React$ElementRef<*> } = useRef(null);
  const position = calculatePopoverPosition(preferredPosition, preferredAlign);
  const dimensions = useDimensions({ containerRef, popover, content, fixed });
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
          {children}
          {!actions && (
            <StyledPopoverClose noPadding={noPadding}>
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
