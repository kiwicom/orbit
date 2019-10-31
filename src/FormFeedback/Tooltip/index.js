// @flow
import React, { useRef, useMemo } from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import media from "../../utils/mediaQuery";
import { StyledText } from "../../Text";
import { Item } from "../../List/ListItem";
import CloseIc from "../../icons/Close";
import { rtlSpacing, right } from "../../utils/rtl";
import resolveColor from "./helpers/resolveColor";
import tooltipArrowStyle from "./helpers/tooltipArrowStyle";
import resolveTooltipArrowPosition from "./helpers/resolveTooltipArrowPosition";
import resolveTooltipPosition from "./helpers/resolveTooltipPosition";
import useDimensions from "./hooks/useDimensions";
import { POSITIONS } from "./consts";

import type { Props } from "./index";

const StyledFormFeedbackTooltip = styled.div`
  display: flex;
  position: absolute;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: ${({ theme }) => theme.orbit.boxShadowElevatedLevel1};
  padding: ${({ theme }) => theme.orbit.spaceSmall};
  padding-${right}: ${({ theme, isHelp }) => isHelp && theme.orbit.spaceSmall};

  z-index: 10012; /* TODO: use some good value */

  max-height: none;
  overflow: visible;
  width: auto;
  background-color: ${resolveColor};
  visibility: ${({ shown }) => (shown ? "visible" : "hidden")};
  opacity: ${({ shown }) => (shown ? "1" : "0")};
  transition: opacity ${({ theme }) => theme.orbit.durationFast} ease-in-out,
    visibility ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  /* prevent position, IEs don't have initial YAY */
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;

  img {
    max-width: 100%;
  }

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
  color: ${({ theme }) => theme.orbit.paletteWhite};
  cursor: pointer;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceSmall}`)};
  display: flex;
`;

StyledCloseButton.defaultProps = {
  theme: defaultTheme,
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

  const preferedPosition = useMemo(
    () =>
      dimensions.bounding.top - dimensions.contentBounding.height > 0
        ? POSITIONS.TOP
        : POSITIONS.BOTTOM,
    [dimensions.bounding.top, dimensions.contentBounding.height],
  );

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
        <StyledCloseButton
          onClick={ev => {
            ev.preventDefault();
            if (onClick) {
              onClick();
            }
          }}
        >
          <CloseIc size="small" />
        </StyledCloseButton>
      )}
    </StyledFormFeedbackTooltip>
  );
};

export default FormFeedbackTooltip;
