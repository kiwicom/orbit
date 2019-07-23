// @flow
import * as React from "react";
import styled, { css, withTheme } from "styled-components";

import defaultTheme from "../defaultTheme";
import media, { getBreakpointWidth } from "../utils/mediaQuery";
import {
  ALIGNS,
  POSITIONS,
  RTL_POSITIONS,
  SIZE_OPTIONS,
  TOOLTIP_ARROW_SIZE,
  TOOLTIP_TOTAL_PADDING,
} from "./consts";
import { StyledText } from "../Text";
import { Item } from "../List/ListItem";
import Portal from "../Portal";
import resolveContainerPosition from "./helpers/resolveContainerPosition";
import resolveContainerAlign from "./helpers/resolveContainerAlign";
import resolveTooltipArrowAlign from "./helpers/resolveTooltipArrowAlign";
import resolveTooltipArrowPosition from "./helpers/resolveTooltipArrowPosition";
import tooltipArrowStyle from "./helpers/tooltipArrowStyle";
import tooltipSize from "./helpers/tooltipSize";
import Button from "../Button";
import {
  isHorizontal,
  isPositionBottom,
  isPositionLeft,
  isPositionRight,
  isPositionTop,
  isVertical,
} from "./helpers/isPosition";
import { isAlignCenter, isAlignEnd, isAlignStart } from "./helpers/isAlign";
import tooltipPadding from "./helpers/tooltipPadding";
import RandomID from "../utils/randomID";
import type { ThemeProps } from "../defaultTheme";
import { QUERIES } from "../utils/mediaQuery/consts";
import Translate from "../Translate";

import type { Props, State, Aligns, Positions } from "./index";

const StyledTooltipChildren = styled.span`
  &:focus:active {
    outline: none;
  }
  ${StyledText} {
    position: relative;
    display: inline-block;
    :after {
      display: block;
      border-bottom: 1px dotted currentColor;
      position: relative;
      content: " ";
      width: 100%;
      height: 0;
      top: -1px;
    }
  }
`;

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

  img {
    max-width: 100%;
  }

  ${media.largeMobile(css`
    width: auto;
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

class Tooltip extends React.PureComponent<Props & ThemeProps, State> {
  static defaultProps = {
    theme: defaultTheme,
  };

  state = {
    position: POSITIONS.RIGHT,
    align: ALIGNS.CENTER,
    shown: false,
    shownMobile: false,
    render: false,
  };

  containerTop: number = 0;

  containerLeft: number = 0;

  containerHeight: number = 0;

  containerWidth: number = 0;

  tooltipWidth: number = 0;

  tooltipHeight: number = 0;

  windowWidth: number = 0;

  windowHeight: number = 0;

  contentHeight: number = 0;

  container: { current: any | HTMLDivElement } = React.createRef();

  tooltip: { current: any | HTMLDivElement } = React.createRef();

  content: { current: any | HTMLDivElement } = React.createRef();

  overlay: { current: any | HTMLDivElement } = React.createRef();

  componentDidMount() {
    this.tooltipId = RandomID("tooltip");
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props !== prevProps) {
      this.getDimensions();
    }
  }

  getDimensions = () => {
    if (
      this.container &&
      this.container.current &&
      this.tooltip &&
      this.tooltip.current &&
      this.content &&
      typeof window !== "undefined"
    ) {
      const containerDimensions = this.container.current.getBoundingClientRect();
      const tooltipDimensions = this.tooltip.current.getBoundingClientRect();

      // container positions and dimensions for calculation
      this.containerTop = containerDimensions.top;
      this.containerLeft = containerDimensions.left;
      this.containerHeight = containerDimensions.height;
      this.containerWidth = containerDimensions.width;

      // tooltip dimensions for calculation
      this.tooltipHeight = tooltipDimensions.height;
      this.tooltipWidth = tooltipDimensions.width;

      // window dimensions for calculation
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;

      this.contentHeight =
        this.content.current && this.content.current.getBoundingClientRect().height;
    }
  };

  setPosition = (desiredPositions: Positions[]) => {
    const {
      containerTop,
      containerLeft,
      containerHeight,
      containerWidth,
      tooltipWidth,
      tooltipHeight,
      windowWidth,
      windowHeight,
    } = this;

    console.log(desiredPositions);
    const canBePositionLeft = containerLeft - tooltipWidth - TOOLTIP_ARROW_SIZE > 0;
    const canBePositionRight =
      containerLeft + containerWidth + tooltipWidth + TOOLTIP_ARROW_SIZE < windowWidth;
    const canBePositionTop = containerTop - tooltipHeight > 0;
    const canBePositionBottom = containerTop + containerHeight + tooltipHeight < windowHeight;

    // returns the position name if the position can be set
    const isInside = (p: Positions) => {
      if (isPositionTop(p) && canBePositionTop) {
        return POSITIONS.TOP;
      }
      if (isPositionRight(p) && canBePositionRight) {
        return POSITIONS.RIGHT;
      }
      if (isPositionBottom(p) && canBePositionBottom) {
        return POSITIONS.BOTTOM;
      }
      if (isPositionLeft(p) && canBePositionLeft) {
        return POSITIONS.LEFT;
      }
      return false;
    };

    const possiblePositions = desiredPositions
      .map(p => isInside(p))
      // filter all non string values
      .filter(p => typeof p === "string");

    // set the first valid position
    // ordering in POSITIONS const is important
    const position = possiblePositions[0];
    if (typeof position === "string" && this.state.position !== position) {
      this.setState({ position });
      this.setAlign(position);
    }
  };

  setAlign = (position: Positions) => {
    const {
      containerLeft,
      containerTop,
      containerHeight,
      containerWidth,
      tooltipWidth,
      tooltipHeight,
      windowWidth,
      windowHeight,
    } = this;

    const canBeVerticalStart =
      containerLeft + containerWidth / 2 - TOOLTIP_TOTAL_PADDING > 0 &&
      containerLeft + containerWidth / 2 - TOOLTIP_TOTAL_PADDING + tooltipWidth < windowWidth;
    const canBeVerticalCenter =
      containerLeft + containerWidth / 2 - tooltipWidth / 2 > 0 &&
      containerLeft + containerWidth / 2 + tooltipWidth / 2 < windowWidth;
    const canBeVerticalEnd =
      containerLeft + containerWidth + TOOLTIP_TOTAL_PADDING < windowWidth &&
      containerLeft + containerWidth / 2 + TOOLTIP_TOTAL_PADDING - tooltipWidth > 0;

    const canBeHorizontalStart =
      containerTop + containerHeight / 2 - TOOLTIP_TOTAL_PADDING > 0 &&
      containerTop + containerHeight / 2 + (tooltipHeight - TOOLTIP_TOTAL_PADDING) < windowHeight;
    const canBeHorizontalCenter =
      containerTop + containerHeight / 2 - tooltipHeight / 2 > 0 &&
      containerTop + containerHeight / 2 + tooltipHeight / 2 < windowHeight;
    const canBeHorizontalEnd =
      containerTop + containerHeight + TOOLTIP_TOTAL_PADDING - tooltipHeight > 0 &&
      containerTop + containerHeight / 2 + TOOLTIP_TOTAL_PADDING < windowHeight;

    const isInside = (p: Positions, a: Aligns) => {
      if (isVertical(p)) {
        if (isAlignStart(a) && canBeVerticalStart) {
          return ALIGNS.START;
        }
        if (isAlignCenter(a) && canBeVerticalCenter) {
          return ALIGNS.CENTER;
        }
        if (isAlignEnd(a) && canBeVerticalEnd) {
          return ALIGNS.END;
        }
      } else if (isHorizontal(p)) {
        if (isAlignStart(a) && canBeHorizontalStart) {
          return ALIGNS.START;
        }
        if (isAlignCenter(a) && canBeHorizontalCenter) {
          return ALIGNS.CENTER;
        }
        if (isAlignEnd(a) && canBeHorizontalEnd) {
          return ALIGNS.END;
        }
      }
      return false;
    };

    const getAlign = (p: Positions) =>
      // https://github.com/facebook/flow/issues/2221
      Object.keys(ALIGNS)
        .map(a => isInside(p, ALIGNS[a]))
        // filter all non string values
        .filter(a => typeof a === "string");
    const possibleAligns = getAlign(position);
    if (
      possibleAligns.length > 0 &&
      typeof possibleAligns[0] === "string" &&
      this.state.align !== possibleAligns[0]
    ) {
      this.setState({ align: possibleAligns[0] });
    }
  };

  switchPreferredPosition = () => {
    const {
      preferredPosition,
      theme: { rtl },
    } = this.props;
    if (rtl) {
      if (preferredPosition === RTL_POSITIONS.LEFT) {
        return RTL_POSITIONS.RIGHT;
      }
      if (preferredPosition === RTL_POSITIONS.RIGHT) {
        return RTL_POSITIONS.LEFT;
      }
    }
    return preferredPosition;
  };

  handleIn = () => {
    this.setState({ render: true });
    setTimeout(() => {
      const {
        theme: { rtl },
      } = this.props;
      const positionsObject = rtl ? RTL_POSITIONS : POSITIONS;
      const positions = Object.keys(positionsObject).map(k => positionsObject[k]);
      this.getDimensions();
      const realPreferredPosition = this.switchPreferredPosition();
      if (realPreferredPosition) {
        this.setPosition([
          realPreferredPosition,
          ...positions.filter(p => p !== realPreferredPosition),
        ]);
      } else {
        this.setPosition(positions);
      }
      this.setState({ shown: true });
    }, 15);
    // https://github.com/facebook/flow/issues/2221
  };

  handleOut = () => {
    setTimeout(() => {
      this.setState({ shown: false });
    }, 15);
  };

  handleOpen = () => {
    this.getDimensions();
    if (this.windowWidth <= +getBreakpointWidth(QUERIES.LARGEMOBILE, this.props.theme, true)) {
      this.setState({ shownMobile: true });
    }
    setTimeout(() => {
      this.getDimensions();
    }, 15);
  };

  handleClose = () => {
    this.setState({ shownMobile: false });
  };

  handleClickOutside = (ev: SyntheticEvent<HTMLElement>) => {
    ev.stopPropagation();
    if (ev.target === this.overlay.current) {
      this.handleClose();
    }
  };

  tooltipId: string;

  render() {
    const {
      content,
      children,
      size = SIZE_OPTIONS.SMALL,
      dataTest,
      tabIndex = "0",
      enabled = true,
    } = this.props;
    const { shown, shownMobile, position, align, render } = this.state;
    const {
      containerTop,
      containerLeft,
      containerHeight,
      containerWidth,
      tooltipHeight,
      tooltipWidth,
      contentHeight,
    } = this;

    return (
      <React.Fragment>
        <StyledTooltipChildren
          onClick={this.handleOpen}
          onMouseEnter={this.handleIn}
          onMouseLeave={this.handleOut}
          onFocus={this.handleIn}
          onBlur={this.handleOut}
          ref={this.container}
          aria-describedby={this.tooltipId}
          tabIndex={enabled && tabIndex}
        >
          {children}
        </StyledTooltipChildren>
        {enabled && render && (
          <Portal element="tooltips">
            <StyledTooltip data-test={dataTest}>
              <StyledTooltipOverlay
                onClick={this.handleClickOutside}
                onFocus={this.handleOpen}
                shownMobile={shownMobile}
                ref={this.overlay}
              />
              <StyledTooltipWrapper
                shown={shown}
                shownMobile={shownMobile}
                position={position}
                align={align}
                size={size}
                ref={this.tooltip}
                onMouseEnter={this.handleIn}
                onClick={this.handleClickOutside}
                onMouseLeave={this.handleOut}
                containerTop={containerTop}
                containerLeft={containerLeft}
                containerHeight={containerHeight}
                containerWidth={containerWidth}
                tooltipHeight={tooltipHeight}
                tooltipWidth={tooltipWidth}
                contentHeight={contentHeight}
                role="tooltip"
                aria-hidden={!shown || !shownMobile}
                id={this.tooltipId}
              >
                <StyledTooltipContent ref={this.content}>{content}</StyledTooltipContent>
                <StyledTooltipClose>
                  <Button type="secondary" block onClick={this.handleClose}>
                    <Translate tKey="button_close" />
                  </Button>
                </StyledTooltipClose>
              </StyledTooltipWrapper>
            </StyledTooltip>
          </Portal>
        )}
      </React.Fragment>
    );
  }
}

const ThemedTooltip = withTheme(Tooltip);
ThemedTooltip.displayName = "Tooltip";
export default ThemedTooltip;
