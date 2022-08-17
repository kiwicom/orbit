import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import { StyledTableCell } from "../TableCell";
import { TableHead as TableHeadType } from "./index.d";

const StyledTableHead = styled(({ children, className, dataTest }) => (
  <thead className={className} data-test={dataTest}>
    {children}
  </thead>
))`
  border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTableHead};
  width: 100%;
  white-space: nowrap;
  ${StyledTableCell} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightTableHead};
  }
`;

StyledTableHead.defaultProps = {
  theme: defaultTheme,
};

const TableHead: typeof TableHeadType = ({ children, dataTest }) => (
  <StyledTableHead dataTest={dataTest}>{children}</StyledTableHead>
);

export default TableHead;
