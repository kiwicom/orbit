// @flow
import React, { useRef, useMemo, useCallback } from "react";
import styled, { css } from "styled-components";

import useTheme from "../../hooks/useTheme";
import resolveContainerPosition from "../helpers/resolveContainerPosition";
import resolveTooltipArrowAlign from "../helpers/resolveTooltipArrowAlign";
import resolveTooltipArrowPosition from "../helpers/resolveTooltipArrowPosition";
import { StyledText } from "../../Text/index";
import { Item } from "../../List/ListItem/index";
import media from "../../utils/mediaQuery/index";
import tooltipSize from "../helpers/tooltipSize";
import resolveContainerAlign from "../helpers/resolveContainerAlign";
import tooltipArrowStyle from "../helpers/tooltipArrowStyle";
import tooltipPadding from "../helpers/tooltipPadding";
import defaultTheme from "../../defaultTheme";
import Button from "../../Button";
import Translate from "../../Translate";
import { StyledTextLink } from "../../TextLink";
import calculateTooltipPosition from "../helpers/calculateTooltipPosition";
import calculateTooltipAlign from "../helpers/calculateTooltipAlign";
import sortPositionsAndAligns from "../helpers/sortPositionsAndAligns";
import useDimensions from "../hooks/useDimensions";
import type { Props } from "./TooltipContent";
import transition from "../../utils/transition";
import FOCUSABLE_ELEMENT_SELECTORS from "../../hooks/useFocusTrap/consts";

const StyledTooltip = styled.div`
  width: 100%;
`;

const StyledTooltipWrapper = styled.div`
  display: block;
  position: fixed;
  width: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  box-sizing: border-box;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.orbit.paletteInkNormal};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowRaisedReverse};
  padding: ${({ theme }) => theme.orbit.spaceMedium}; // TODO: create token paddingTooltip
  visibility: ${({ shownMobile }) => (shownMobile ? "visible" : "hidden")};
  opacity: ${({ shownMobile }) => (shownMobile ? "1" : "0")};
  transition: ${({ theme, shownMobile }) =>
    css`
      ${transition(["bottom"], "normal", "ease-in-out")},
      ${transition(["visibility"], "fast", "linear")},
        ${!shownMobile && theme.orbit.durationNormal}
    `};
  z-index: 10012; // TODO: use some good value
  bottom: ${({ shownMobile, tooltipWidth }) => (shownMobile ? "16px" : `-${tooltipWidth}px`)};
  left: ${({ theme }) => theme.orbit.spaceMedium};
  right: ${({ theme }) => theme.orbit.spaceMedium};
  max-height: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  overflow-y: scroll;

  img {
    max-width: 100%;
  }

  ${media.largeMobile(css`
    max-height: none;
    overflow: visible;
    width: auto;
    position: absolute;
    max-width: ${tooltipSize};
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    padding: ${tooltipPadding};
    visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
    opacity: ${({ shown }) => (shown ? "1" : "0")};
    transition: ${transition(["opacity", "visibility"], "fast", "ease-in-out")};

    box-shadow: ${({ theme }) => theme.orbit.boxShadowRaised};

    // prevent position, IEs don't have initial YAY
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;

    // tooltip positions
    ${resolveContainerPosition};
    ${resolveContainerAlign};
  `)};

  &::after {
    width: 0;
    height: 0;
    border-style: solid;
    content: " ";
    display: none;
    position: absolute;

    ${tooltipArrowStyle};

    ${resolveTooltipArrowPosition};
    ${resolveTooltipArrowAlign};

    ${media.largeMobile(css`
      display: block;
    `)};
  }
`;

StyledTooltipWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  color: ${({ theme }) => theme.orbit.paletteWhite};
  margin-bottom: 16px;

  & ${StyledText}, ${Item} {
    font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
    font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }

  & ${StyledTextLink} {
    color: ${({ theme }) => theme.orbit.paletteWhite};
  }

  ${media.largeMobile(css`
    font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    margin-bottom: 0;

    & ${StyledText}, ${Item} {
      font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
      font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    }
  `)};
`;

StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipClose = styled.div`
  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
  `)}
`;

StyledTooltipClose.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipOverlay = styled.div`
  position: fixed;
  display: block;
  visibility: ${({ shownMobile }) => (shownMobile ? "visible" : "hidden")};
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(23, 27, 30, 0.6); // TODO: token
  z-index: 10011; // TODO: use some good value
  opacity: ${({ shownMobile }) => (shownMobile ? "1" : "0")};
  transition: ${({ theme, shownMobile }) => css`
    ${transition(["opacity"], "normal", "ease-in-out")},
    ${transition(["visibility"], "fast", "linear")},
    ${!shownMobile && theme.orbit.durationNormal}
  `};

  ${media.largeMobile(css`
    display: none;
    visibility: hidden;
  `)};
`;

StyledTooltipOverlay.defaultProps = {
  theme: defaultTheme,
};

const TooltipContent = ({
  dataTest,
  shownMobile,
  shown,
  size,
  tooltipId,
  children,
  onClose,
  onCloseMobile,
  onEnter,
  preferredPosition,
  preferredAlign,
  containerRef,
  parent,
}: Props) => {
  const theme = useTheme();
  const overlay = useRef(null);
  const tooltip = useRef(null);
  const content = useRef(null);
  const [positions, aligns] = useMemo(
    () => sortPositionsAndAligns(preferredPosition, preferredAlign, theme),
    [preferredAlign, preferredPosition, theme],
  );
  const dimensions = useDimensions({ containerRef, tooltip, content }, children, parent);
  const position = useMemo(() => calculateTooltipPosition(positions, dimensions), [
    dimensions,
    positions,
  ]);
  const align = useMemo(() => calculateTooltipAlign(position, aligns, dimensions), [
    aligns,
    dimensions,
    position,
  ]);
  const handleClickOutside = useCallback(
    ev => {
      ev.stopPropagation();
      if (ev.target === overlay.current) {
        onCloseMobile();
      }
    },
    [onCloseMobile],
  );
  const handleInnerClick = useCallback(
    ev => {
      if (tooltip.current) {
        const focusableElements = tooltip.current.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose();
          onCloseMobile();
        }
      }
    },
    [onClose, onCloseMobile],
  );
  return (
    <StyledTooltip role="tooltip" id={tooltipId} data-test={dataTest}>
      <StyledTooltipOverlay shownMobile={shownMobile} ref={overlay} onClick={handleClickOutside} />
      <StyledTooltipWrapper
        shown={shown && position && align}
        shownMobile={shownMobile}
        size={size}
        align={align}
        position={position}
        ref={tooltip}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        tooltipHeight={dimensions.tooltipHeight}
        tooltipWidth={dimensions.tooltipWidth}
        contentHeight={dimensions.contentHeight}
        role="tooltip"
        aria-hidden={!shown && !shownMobile}
        onMouseEnter={onEnter}
        onMouseLeave={onClose}
        onClick={handleInnerClick}
      >
        <StyledTooltipContent ref={content}>{children}</StyledTooltipContent>
        <StyledTooltipClose>
          <Button type="secondary" fullWidth onClick={onCloseMobile}>
            <Translate tKey="button_close" />
          </Button>
        </StyledTooltipClose>
      </StyledTooltipWrapper>
    </StyledTooltip>
  );
};

export default TooltipContent;
