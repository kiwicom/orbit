// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import ALIGN_OPTIONS from "./consts";
import { textAlign } from "../../utils/rtl";

import type { Props } from ".";

export const StyledTableCell = styled(({ children, className }) => (
  <td className={className}>{children}</td>
))`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.colorTextTable};
  text-align: ${({ align }) => textAlign(align)};
`;

StyledTableCell.defaultProps = {
  theme: defaultTheme,
};

const TableCell = (props: Props) => {
  const { align = ALIGN_OPTIONS.CENTER } = props;
  return <StyledTableCell align={align}>{props.children}</StyledTableCell>;
};

export default TableCell;
