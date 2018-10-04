// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";

import type { Props } from "./";

export const StyledTableCell = styled(({ children, className }) => (
  <td className={className}>{children}</td>
))`
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.paletteInkLight};
  // TODO: create token
  // colorTable
  text-align: center;
`;

StyledTableCell.defaultProps = {
  theme: defaultTokens,
};

const TableCell = (props: Props) => <StyledTableCell>{props.children}</StyledTableCell>;

export default TableCell;
