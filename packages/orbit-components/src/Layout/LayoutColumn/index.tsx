import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import getViewportHideStyles from "../../Hide/helpers/getViewportHideStyles";
import { StyledCard } from "../../Card";
import { getBreakpointWidth } from "../../utils/mediaQuery";
import { QUERIES } from "../../utils/mediaQuery/consts";
import { Props } from "./index.d";
import { Devices } from "../../utils/mediaQuery/index.d";

const StyledColumn: any = styled.div<{ spanEntireRow?: boolean; hideOn?: Devices[] }>`
  ${({ theme, spanEntireRow, hideOn }) => css`
    ${!!hideOn && getViewportHideStyles(hideOn)};
    ${spanEntireRow &&
    css`
      grid-column: 1 / -1;
    `};

    @media (max-width: ${+getBreakpointWidth(QUERIES.largeMobile, theme, true) - 1}px) {
      ${StyledCard} {
        margin-right: -${theme.orbit.spaceMedium};
        margin-left: -${theme.orbit.spaceMedium};
        width: auto;
      }
    }
  `}
`;

StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn, as = "div", spanEntireRow, dataTest }: Props) => {
  return (
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={as} spanEntireRow={spanEntireRow}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
