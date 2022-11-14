import * as React from "react";
import styled from "styled-components";

import type * as Common from "../../common/types";

export const StyledTableRow = styled(({ children, className, dataTest }) => (
  <tr className={className} data-test={dataTest}>
    {children}
  </tr>
))`
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
`;

const TableRow: React.FC<React.PropsWithChildren<Common.Globals>> = ({ dataTest, children }) => (
  <StyledTableRow dataTest={dataTest}>{children}</StyledTableRow>
);

export default TableRow;
