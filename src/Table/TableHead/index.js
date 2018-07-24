// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import { StyledTableCell } from "../TableCell/index";

import type { Props } from "./";

const StyledTableHead = styled(({ children, className }) => (
  <thead className={className}>{children}</thead>
))`
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteInkLighter};
  // TODO: create token
  // borderColorTableHead
  width: 100%;
  white-space: nowrap;
  ${StyledTableCell} {
    font-weight: ${({ theme }) => theme.orbit.fontWeightBold};
    // TODO: create token
    // fontWeightTableHead
  }
`;

StyledTableHead.defaultProps = {
  theme: defaultTokens,
};
const TableHead = (props: Props) => <StyledTableHead>{props.children}</StyledTableHead>;

export default TableHead;
