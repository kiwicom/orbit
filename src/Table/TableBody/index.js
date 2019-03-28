// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";

import type { Props } from "./";

export const StyledTableBody = styled(({ children, className }) => (
  <tbody className={className}>{children}</tbody>
))`
  width: 100%;
  white-space: nowrap;
  border-left: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
  border-right: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
`;

StyledTableBody.defaultProps = {
  theme: defaultTheme,
};

const TableBody = (props: Props) => <StyledTableBody>{props.children}</StyledTableBody>;

export default TableBody;
