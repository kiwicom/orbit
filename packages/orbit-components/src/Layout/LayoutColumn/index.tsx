"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import type { Props } from "./types";
import type { Devices } from "../../utils/mediaQuery/types";
import { DEVICES, QUERIES } from "../../utils/mediaQuery/consts";
import mq, { getBreakpointWidth } from "../../utils/mediaQuery";

const StyledColumn = styled.div<{ spanEntireRow?: boolean; hideOn: Devices[] }>`
  ${({ spanEntireRow, hideOn, theme }) => css`
    ${Boolean(hideOn) &&
    hideOn.length > 0 &&
    Object.values(DEVICES).map(viewport =>
      viewport in mq
        ? css`
            ${mq[viewport](css`
              display: ${hideOn.includes(viewport) && "none"};
            `)};
          `
        : // "smallMobile" is not media query so we need to check it explicitly
          viewport === "smallMobile" &&
          hideOn.includes(viewport) &&
          css`
            display: none;
          `,
    )};

    ${spanEntireRow &&
    css`
      grid-column: 1 / -1;
    `};

    @media (max-width: ${+getBreakpointWidth(QUERIES.LARGEMOBILE, theme, true) - 1}px) {
      .orbit-card {
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

const LayoutColumn = ({ children, hideOn = [], as = "div", spanEntireRow, dataTest }: Props) => {
  return (
    /* @ts-expect-error: as */
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={as} spanEntireRow={spanEntireRow}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
