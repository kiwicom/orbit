// @flow
import styled, { css } from "styled-components";
import * as React from "react";

import mq from "../../utils/mediaQuery";
import { CardElement } from "../helpers/mixins";
import defaultTheme from "../../defaultTheme";
import { getBorder, getBorderRadius, getBorderRadiusMobile } from "../helpers/borders";

const topBorderRadius = css`
  border-top-left-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};
  border-top-right-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};

  ${mq.tablet(css`
    border-top-left-radius: ${getBorderRadius};
    border-top-right-radius: ${getBorderRadius};
  `)}
`;

topBorderRadius.defaultTheme = {
  theme: defaultTheme,
};

const bottomBorderRadius = css`
  border-bottom-left-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};
  border-bottom-right-radius: ${({ expanded }) => expanded && getBorderRadiusMobile};

  ${mq.tablet(css`
    border-bottom-left-radius: ${getBorderRadius};
    border-bottom-right-radius: ${getBorderRadius};
  `)}
`;

bottomBorderRadius.defaultProps = {
  theme: defaultTheme,
};

const StyledCardWrapper = styled.div`
  padding: ${({ theme, noPadding }) => !noPadding && theme.orbit.spaceMedium};
  ${CardElement};
  ${({ bottomBorder }) => bottomBorder && bottomBorderRadius};
  border-bottom: ${({ roundedBottom, bottomBorder }) =>
    (roundedBottom || bottomBorder) && getBorder};
  transition: margin ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  ${({ noBorderTop, expandable }) =>
    noBorderTop && !expandable && `border-top: 1px solid transparent; padding-top: 0 !important;`};

  ${({ expanded }) =>
    expanded &&
    css`
      margin: ${({ theme }) => theme.orbit.spaceXSmall} 0;
      border: 1px solid transparent;
    `};

  ${({ roundedTop }) => roundedTop && topBorderRadius};
  ${({ roundedBottom }) => roundedBottom && bottomBorderRadius}

  &:last-of-type {
    ${({ expanded }) =>
      !expanded &&
      css`
        border-bottom: ${getBorder};
      `}
  }

  ${mq.tablet(css`
    &:first-of-type {
      ${topBorderRadius};
    }

    &:last-of-type {
      ${bottomBorderRadius};
    }

    padding: ${({ theme, noPadding }) => !noPadding && theme.orbit.spaceLarge};
  `)}
`;

StyledCardWrapper.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  children: React.Node,
  bottomBorder?: boolean,
  roundedBottom?: boolean,
  roundedTop?: boolean,
  expanded?: boolean,
  noPadding?: boolean,
  dataTest?: string,
  noBorderTop?: boolean,
  expandable?: boolean,
  initialExpanded?: boolean,
|};

const CardWrapper = ({
  children,
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
