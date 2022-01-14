// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import getViewportHideStyles from "../../Hide/helpers/getViewportHideStyles";
import { StyledCard } from "../../Card";
import { getBreakpointWidth } from "../../utils/mediaQuery";
import { QUERIES } from "../../utils/mediaQuery/consts";

import type { Props } from ".";

const StyledColumn = styled.div`
  ${({ theme, spanEntireRow, hideOn }) => css`
    ${!!hideOn && getViewportHideStyles(hideOn)};
    ${spanEntireRow &&
    css`
      grid-column: 1 / -1;
    `};

    @media (max-width: ${+getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
      ${StyledCard} {
        margin-right: -${theme.orbit.spaceMedium};
        margin-left: -${theme.orbit.spaceMedium};
        width: auto;
      }
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({
  children,
  hideOn,
  as = "div",
  spanEntireRow = false,
  dataTest,
}: Props): React.Node => {
  return (
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={as} spanEntireRow={spanEntireRow}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
