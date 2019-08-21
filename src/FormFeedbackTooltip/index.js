// @flow
import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

import boundingClientRect from "../utils/boundingClientRect";
import defaultTheme from "../defaultTheme";
import media from "../utils/mediaQuery";
import { StyledText } from "../Text";
import { Item } from "../List/ListItem";
import resolveTooltipArrowPosition from "../Tooltip/helpers/resolveTooltipArrowPosition";

const tooltipArrowStyle = ({ position, theme }) => {
  const arrows = {
    top: css`
      border-width: 7px 7px 0 7px;
      border-color: ${theme.orbit.paletteBlueDark} transparent transparent transparent;
    `,
    bottom: css`
      border-width: 0 7px 7px 7px;
      border-color: transparent transparent ${theme.orbit.paletteBlueDark} transparent;
    `,
  };
  return arrows[position];
};

const resolveTooltipPosition = ({ position, contentBounding }) => {
  const pos = {
    top: css`
      top: ${({ contentBounding }) => -contentBounding.height - 7}px;
    `,
    bottom: css`
      bottom: 0;
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

  left: -15px;


  img {
    max-width: 100%;
  }

  ${media.largeMobile(css`
    max-height: none;
    overflow: visible;
    width: auto;
    border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
    background-color: ${({ theme }) =>
      theme.orbit.paletteBlueDark}; // TODO: use token backgroundTooltip
    visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
    opacity: ${({ shown }) => (shown ? "1" : "0")};
    transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out,
      visibility ${({ theme }) => theme.orbit.durationFast} ease-in-out;
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
   /* ${resolveTooltipArrowAlign}; */

    ${media.largeMobile(css`
      display: block;
    `)};
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

const FormFeedbackTooltip = ({ bounding, iconBounding, shown = true, children }) => {
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
  console.log("Label", bounding);
  console.log("Icon", iconBounding);

  return (
    <StyledFormFeedbackTooltip
      ref={conentRef}
      contentBounding={contentBounding}
      bounding={bounding}
      position={preferedPosition}
      shown={shown}
    >
      <StyledTooltipContent>{children}</StyledTooltipContent>
    </StyledFormFeedbackTooltip>
  );
};

export default FormFeedbackTooltip;
