// @flow
import * as React from "react";
import styled from "styled-components";

import type { Props } from "./";

export const StyledTableRow = styled(({ children, className }) => (
  <tr className={className}>{children}</tr>
))`
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
`;

const TableRow = (props: Props) => <StyledTableRow>{props.children}</StyledTableRow>;

export default TableRow;
