"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import type { Props } from "./types";
import type { Devices } from "../../utils/mediaQuery/types";
import { DEVICES } from "../../utils/mediaQuery/consts";
import mq from "../../utils/mediaQuery";

const StyledColumn = styled.div<{ spanEntireRow?: boolean; hideOn: Devices[] }>`
  ${({ spanEntireRow, hideOn }) => css`
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
