import styled, { css } from "styled-components";
import * as React from "react";

import transition from "../../../utils/transition";
import mq from "../../../utils/mediaQuery";
import { CardElement } from "../../helpers/mixins";
import defaultTheme from "../../../defaultTheme";
import { getBorder, getBorderRadius, getBorderRadiusMobile } from "../../helpers/borders";
import type { Props } from "./types";

const topBorderRadius = css`
  border-top-left-radius: ${({ expanded }: { expanded?: boolean }) =>
    expanded && getBorderRadiusMobile};
  border-top-right-radius: ${({ expanded }: { expanded?: boolean }) =>
    expanded && getBorderRadiusMobile};

  ${mq.largeMobile(css`
    border-top-left-radius: ${getBorderRadius};
    border-top-right-radius: ${getBorderRadius};
  `)}
`;

const bottomBorderRadius = css`
  ${({ expanded }: { expanded?: boolean }) => css`
    border-bottom-left-radius: ${expanded && getBorderRadiusMobile};
    border-bottom-right-radius: ${expanded && getBorderRadiusMobile};
    ${mq.largeMobile(css`
      border-bottom-left-radius: ${getBorderRadius};
      border-bottom-right-radius: ${getBorderRadius};
    `)}
  `}
`;

const StyledCardWrapper = styled.div<Props>`
  ${({
    theme,
    expandable,
    expanded,
    noPadding,
    noBorderTop,
    bottomBorder,
    roundedTop,
    roundedBottom,
    onClick,
  }) => css`
    padding: ${!noPadding && theme.orbit.spaceMedium};
    cursor: ${onClick && `pointer`};
    ${CardElement};
    ${bottomBorder && bottomBorderRadius};
    border-bottom: ${(roundedBottom || bottomBorder) && getBorder};
    transition: ${transition(["margin"], "fast", "ease-in-out")};
    ${noBorderTop &&
    !expandable &&
    css`
      border-top: 1px solid transparent;
      padding-top: 0 !important;
    `};

    ${expanded &&
    css`
      margin: ${theme.orbit.spaceXSmall} 0;
      border: 1px solid transparent;
    `};

    ${roundedTop && topBorderRadius};
    ${roundedBottom && bottomBorderRadius}

    &:last-of-type {
      ${!expanded &&
      css`
        border-bottom: ${getBorder};
      `}
    }

    ${mq.largeMobile(css`
      &:first-of-type {
        ${topBorderRadius};
      }

      &:last-of-type {
        ${bottomBorderRadius};
      }

      padding: ${!noPadding && theme.orbit.spaceLarge};
    `)}

    &:focus {
      background: ${theme.orbit.paletteWhiteHover};
    }

    &:hover {
      background: ${onClick && theme.orbit.paletteWhiteHover};
    }
  `};
`;

StyledCardWrapper.defaultProps = {
  theme: defaultTheme,
};

const CardWrapper = ({
  children,
  onClick,
  bottomBorder,
  roundedBottom,
  roundedTop,
  expanded,
  noBorderTop,
  dataTest,
  noPadding,
  expandable,
  initialExpanded,
}: Props) => (
  <StyledCardWrapper
    bottomBorder={bottomBorder}
    expanded={expanded || initialExpanded}
    onClick={onClick}
    tabIndex={onClick ? 0 : undefined}
    data-test={dataTest}
    noBorderTop={noBorderTop}
    expandable={expandable}
    noPadding={noPadding}
    roundedBottom={roundedBottom}
    roundedTop={roundedTop}
  >
    {children}
  </StyledCardWrapper>
);

export default CardWrapper;
