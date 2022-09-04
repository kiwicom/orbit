import * as React from "react";
import styled from "styled-components";

import { TableRow as TableRowType } from "./index.d";

export const StyledTableRow = styled(({ children, className, dataTest }) => (
  <tr className={className} data-test={dataTest}>
    {children}
  </tr>
))`
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
`;

const TableRow: typeof TableRowType = ({ dataTest, children }) => (
  <StyledTableRow dataTest={dataTest}>{children}</StyledTableRow>
);

export default TableRow;
