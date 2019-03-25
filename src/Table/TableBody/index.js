// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import { StyledTableRow } from "../TableRow";
import { StyledTableCell } from "../TableCell";

import type { Props } from "./";

export const StyledTableBody = styled(({ children, className }) => (
  <tbody className={className}>{children}</tbody>
))`
  width: 100%;
  white-space: nowrap;

  border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTable};

  ${StyledTableRow} ${StyledTableCell} {
    &:first-child {
      border-left: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
    }
    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
    }
  }
`;

StyledTableBody.defaultProps = {
  theme: defaultTokens,
};

const TableBody = (props: Props) => <StyledTableBody>{props.children}</StyledTableBody>;

export default TableBody;
