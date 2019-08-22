// @flow
import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

import boundingClientRect from "../utils/boundingClientRect";
import defaultTheme from "../defaultTheme";
import media from "../utils/mediaQuery";
import { StyledText } from "../Text";
import { Item } from "../List/ListItem";

const ARROW_SIZE = 7;
const SIDE_NUDGE = 15;

const resolveColor = ({ isHelp, theme }) => {
  return isHelp ? theme.orbit.paletteBlueDark : theme.orbit.paletteRedNormal;
};

resolveColor.defaultProps = {
  theme: defaultTheme,
};

const tooltipArrowStyle = ({ position }) => {
  const arrows = {
    top: css`
      border-width: 7px 7px 0 7px;
      border-color: ${resolveColor} transparent transparent transparent;
    `,
    bottom: css`
      border-width: 0 7px 7px 7px;
      border-color: transparent transparent ${resolveColor} transparent;
    `,
  };
  return arrows[position];
};

const resolveTooltipArrowPosition = ({ position, contentBounding, iconBounding, bounding }) => {
  const leftPos = iconBounding.left - contentBounding.left || SIDE_NUDGE;
  const pos = {
    top: css`
      bottom: ${-ARROW_SIZE}px;
      left: ${leftPos <= contentBounding.width ? leftPos : 0}px;
    `,
    bottom: css`
      top: ${-ARROW_SIZE}px;
      left: ${leftPos <= contentBounding.width ? leftPos : 0}px;
    `,
  };
  return pos[position];
};

const resolveTooltipPosition = ({ position, contentBounding, bounding, iconBounding }) => {
  const pos = {
    top: css`
      top: ${-contentBounding.height - 7}px;
      left: ${() => (bounding.left - iconBounding.left === 0 ? `-${SIDE_NUDGE}px` : "0")};
    `,
    bottom: css`
      bottom: ${-contentBounding.height - 7}px;
      left: 0;
    `,
  };
  return pos[position];
};

const StyledFormFeedbackTooltip = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: ${({ theme }) => theme.orbit.paletteWhite}; // TODO: use token backgroundTooltip
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  padding: ${({ theme }) => theme.orbit.spaceMedium}; // TODO: create token paddingTooltip
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

  & ${StyledText}, ${Item} {
    color: ${({ theme }) => theme.orbit.paletteWhite};
    font-weight: ${({ theme }) => theme.orbit.fontWeightNormal};
    color: ${({ theme }) => theme.orbit.paletteInkNormal};
  }

  ${media.largeMobile(css`
    font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};

    & ${StyledText}, ${Item} {
      font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
      font-size: ${({ theme }) => theme.orbit.fontSizeTextSmall};
    }
  `)};
`;

StyledTooltipContent.defaultProps = {
  theme: defaultTheme,
};

const FormFeedbackTooltip = ({
  bounding,
  iconBounding,
  shown = true,
  children,
  isHelp = false,
}) => {
  const [contentBounding, setContentBounding] = useState({});

  const conentRef = useCallback(node => {
    if (node !== null) {
      // Hacky should fix boundingClieentRect function to count with element rather then ref.
      const emulateRef = {
        current: node,
      };
      setContentBounding(boundingClientRect(emulateRef));
    }
  }, []);

  const preferedPosition = bounding.top - contentBounding.height > 0 ? "top" : "bottom";

  return (
    <StyledFormFeedbackTooltip
      ref={conentRef}
      contentBounding={contentBounding}
      bounding={bounding}
      iconBounding={iconBounding}
      position={preferedPosition}
      shown={shown}
      isHelp={isHelp}
    >
      <StyledTooltipContent>{children}</StyledTooltipContent>
    </StyledFormFeedbackTooltip>
  );
};

export default FormFeedbackTooltip;
