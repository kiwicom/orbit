// @flow
import React, { useRef, useMemo } from "react";
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
import calculateTooltipPosition from "../helpers/calculateTooltipPosition";
import calculateTooltipAlign from "../helpers/calculateTooltipAlign";
import sortPositionsAndAligns from "../helpers/sortPositionsAndAligns";
import useDimensions from "../hooks/useDimensions";

const StyledTooltip = styled.div`
  width: 100%;
`;

const StyledTooltipWrapper = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: ${({ theme }) => theme.orbit.paletteWhite}; // TODO: use token backgroundTooltip
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  padding: ${({ theme }) => theme.orbit.spaceMedium}; // TODO: create token paddingTooltip
  visibility: ${({ shownMobile }) => (shownMobile ? "visible" : "hidden")};
  opacity: ${({ shownMobile }) => (shownMobile ? "1" : "0")};
  transition: bottom ${({ theme }) => theme.orbit.durationNormal} ease-in-out,
    visibility ${({ theme }) => theme.orbit.durationFast} linear
      ${({ shownMobile, theme }) => !shownMobile && theme.orbit.durationNormal};
  z-index: 10012; // TODO: use some good value
  bottom: ${({ shownMobile, tooltipWidth }) => (shownMobile ? "0" : `-${tooltipWidth}px`)};
  left: 0;
  right: 0;
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
    background-color: ${({ theme }) =>
      theme.orbit.paletteBlueDark}; // TODO: use token backgroundTooltip
    visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
    opacity: ${({ shown }) => (shown ? "1" : "0")};
    transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out,
      visibility ${({ theme }) => theme.orbit.durationFast} ease-in-out;

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
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  margin-bottom: 16px;

  & ${StyledText}, ${Item} {
    font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
    font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
    color: ${({ theme }) => theme.orbit.paletteInkNormal};
  }

  ${media.largeMobile(css`
    color: ${({ theme }) => theme.orbit.paletteWhite};
    font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
    margin-bottom: 0;

    & ${StyledText}, ${Item} {
      color: ${({ theme }) => theme.orbit.paletteWhite};
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
  transition: opacity ${({ theme }) => theme.orbit.durationNormal} ease-in-out,
    visibility ${({ theme }) => theme.orbit.durationFast} linear
      ${({ shownMobile, theme }) => !shownMobile && theme.orbit.durationNormal};

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
  containerRef,
}) => {
  const theme = useTheme();
  const overlay = useRef(null);
  const tooltip = useRef(null);
  const content = useRef(null);
  const [positions, aligns] = useMemo(() => sortPositionsAndAligns(preferredPosition, theme), [
    preferredPosition,
    theme,
  ]);
  const dimensions = useDimensions({ containerRef, tooltip, content });
  const position = useMemo(() => calculateTooltipPosition(positions, dimensions), [
    dimensions,
    positions,
  ]);
  const align = useMemo(() => calculateTooltipAlign(position, aligns, dimensions), [
    aligns,
    dimensions,
    position,
  ]);
  const handleClickOutside = ev => {
    ev.stopPropagation();
    if (ev.target === overlay.current) {
      onCloseMobile();
    }
  };
  return (
    <StyledTooltip data-test={dataTest}>
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
        aria-hidden={!shown || !shownMobile}
        id={tooltipId}
        onMouseEnter={onEnter}
        onMouseLeave={onClose}
      >
        <StyledTooltipContent ref={content}>{children}</StyledTooltipContent>
        <StyledTooltipClose>
          <Button type="secondary" block onClick={onCloseMobile}>
            <Translate tKey="button_close" />
          </Button>
        </StyledTooltipClose>
      </StyledTooltipWrapper>
    </StyledTooltip>
  );
};

export default TooltipContent;
