// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import { StyledTableCell } from "../TableCell";

import type { Props } from ".";

const StyledTableHead = styled(({ children, className, dataTest }) => (
  <thead className={className} data-test={dataTest}>
    {children}
  </thead>
))`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.orbit.paletteCloudDarker};
    width: 100%;
    white-space: nowrap;
    ${StyledTableCell} {
      font-weight: 700;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTableHead.defaultProps = {
  theme: defaultTheme,
};
const TableHead = ({ children, dataTest }: Props): React.Node => (
  <StyledTableHead dataTest={dataTest}>{children}</StyledTableHead>
);

export default TableHead;
