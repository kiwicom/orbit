// @flow
import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";

import boundingClientRect from "../utils/boundingClientRect";
import defaultTheme from "../defaultTheme";
import media from "../utils/mediaQuery";
import { StyledText } from "../Text";
import { Item } from "../List/ListItem";
import CloseIc from "../icons/Close";
import { ARROW_SIZE, SIDE_NUDGE } from "./consts";

import type { Props } from "./index";

const resolveColor = ({ isHelp, theme }) => {
  return isHelp ? theme.orbit.paletteBlueDark : theme.orbit.paletteRedNormal;
};

resolveColor.defaultProps = {
  theme: defaultTheme,
};

const tooltipArrowStyle = ({ position }) => {
  const arrows = {
    top: css`
      border-width: ${ARROW_SIZE}px ${ARROW_SIZE}px 0 ${ARROW_SIZE}px;
      border-color: ${resolveColor} transparent transparent transparent;
    `,
    bottom: css`
      border-width: 0 ${ARROW_SIZE}px ${ARROW_SIZE}px ${ARROW_SIZE}px;
      border-color: transparent transparent ${resolveColor} transparent;
    `,
  };
  return arrows[position];
};

const resolveTooltipArrowPosition = ({
  theme: { rtl },
  position,
  contentBounding,
  iconBounding,
  inlineLabel,
}) => {
  const cssPosition = rtl ? "right" : "left";

  const whenInline = SIDE_NUDGE + iconBounding.width / 2 - ARROW_SIZE;
  const leftPos = iconBounding.left - contentBounding.left + iconBounding.width / 2 - ARROW_SIZE;
  const rightPos = contentBounding.right - iconBounding.right + iconBounding.width / 2 - ARROW_SIZE;

  const rtlPosition = rtl ? rightPos : leftPos;
  const postionToApply = inlineLabel ? rtlPosition : whenInline;

  const pos = {
    top: css`
      bottom: ${-ARROW_SIZE}px;
      ${cssPosition}: ${postionToApply}px;
    `,
    bottom: css`
      top: ${-ARROW_SIZE}px;
      ${cssPosition}: ${postionToApply}px;
    `,
  };

  return pos[position];
};

const resolveTooltipPosition = ({ theme: { rtl }, position, contentBounding, inlineLabel }) => {
  const cssPosition = rtl ? "right" : "left";

  const pos = {
    top: css`
      top: ${-contentBounding.height - 7}px;
      ${cssPosition}: ${() => (inlineLabel ? "0" : `-${SIDE_NUDGE}px`)};
    `,
    bottom: css`
      bottom: ${-contentBounding.height - 7}px;
      ${cssPosition}: 0;
    `,
  };

  return pos[position];
};

const StyledFormFeedbackTooltip = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  padding-right: ${({ theme, isHelp }) => isHelp && theme.orbit.spaceSmall};
  z-index: 10012; // TODO: use some good value

  max-height: ${({ theme }) => `calc(100% - ${theme.orbit.spaceXLarge})`};
  overflow-y: scroll;

  // prevent position, IEs don't have initial YAY
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;

  img {
    max-width: 100%;
  }

  max-height: none;
  overflow: visible;
  width: auto;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  background-color: ${resolveColor};
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    visibility ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &::after {
    width: 0;
    height: 0;
    border-style: solid;
    content: " ";
    display: block;
    position: absolute;

    ${tooltipArrowStyle};
    ${resolveTooltipArrowPosition};
  }

  ${resolveTooltipPosition}
`;

StyledFormFeedbackTooltip.defaultProps = {
  theme: defaultTheme,
};

const StyledTooltipContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.paletteWhite};

  & ${StyledText}, ${Item}, a {
    color: ${({ theme }) => theme.orbit.paletteWhite};
    font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
    color: ${({ theme }) => theme.orbit.paletteInkNormal};
  }

  ${media.largeMobile(css`
    font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};

    & ${StyledText}, ${Item}, a {
      color: ${({ theme }) => theme.orbit.paletteWhite};
      font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
      font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    }
    & a:hover {
      color: ${({ theme }) => theme.orbit.paletteWhite};
    }
  `)};
`;

StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const StyledCloseButton = styled.a`
  color: #fff;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.orbit.spaceSmall};
  display: flex;
`;

StyledCloseButton.defaultProps = {
  theme: defaultTheme,
};

const useDimensions = ({ boundingRef, contentRef, iconBoundingRef }, children, inlineLabel) => {
  const [dimensions, setDimensions] = useState({
    set: false,
    bounding: {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    },
    contentBounding: {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    },
    iconBounding: { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0 },
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const bounding = boundingClientRect(boundingRef);
      const contentBounding = boundingClientRect(contentRef);
      const iconBounding = boundingClientRect(iconBoundingRef);
      if (bounding && contentBounding && iconBounding && typeof window !== "undefined") {
        setDimensions({
          set: true,
          bounding,
          contentBounding,
          iconBounding,
        });
      }
    };

    calculateDimensions();

    window.addEventListener("resize", calculateDimensions);
    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [boundingRef, contentRef, iconBoundingRef, children, inlineLabel]);

  return dimensions;
};

const FormFeedbackTooltip = ({
  boundingRef,
  iconBoundingRef,
  shown = true,
  children,
  isHelp = false,
  inlineLabel,
  onClick,
}: Props) => {
  const contentRef = useRef(null);
  const dimensions = useDimensions(
    { boundingRef, contentRef, iconBoundingRef },
    children,
    inlineLabel,
  );
  const preferedPosition =
    dimensions.bounding.top - dimensions.contentBounding.height > 0 ? "top" : "bottom";

  return (
    <StyledFormFeedbackTooltip
      ref={contentRef}
      contentBounding={dimensions.contentBounding}
      bounding={dimensions.bounding}
      iconBounding={dimensions.iconBounding}
      position={preferedPosition}
      shown={shown && dimensions.set}
      isHelp={isHelp}
      inlineLabel={inlineLabel}
    >
      <StyledTooltipContent>{children}</StyledTooltipContent>
      {isHelp && (
        <StyledCloseButton onClick={onClick}>
          <CloseIc size="small" />
        </StyledCloseButton>
      )}
    </StyledFormFeedbackTooltip>
  );
};

export default FormFeedbackTooltip;
