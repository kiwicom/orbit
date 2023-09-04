"use client";

import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import getViewportHideStyles from "../../Hide/helpers/getViewportHideStyles";
import type { Props } from "./types";
import type { Devices } from "../../utils/mediaQuery/types";

const StyledColumn = styled.div<{ spanEntireRow?: boolean; hideOn?: Devices[] }>`
  ${({ spanEntireRow, hideOn }) => css`
    ${!!hideOn && getViewportHideStyles(hideOn)};
    ${spanEntireRow &&
    css`
      grid-column: 1 / -1;
    `};
  `}
`;

StyledColumn.defaultProps = {
  theme: defaultTheme,
};

const LayoutColumn = ({ children, hideOn, as = "div", spanEntireRow, dataTest }: Props) => {
  return (
    // @ts-expect-error TODO
    <StyledColumn data-test={dataTest} hideOn={hideOn} as={as} spanEntireRow={spanEntireRow}>
      {children}
    </StyledColumn>
  );
};

export default LayoutColumn;
