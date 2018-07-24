// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";

import type { Props } from "./";

export const StyledTableBody = styled(({ children, className }) => (
  <tbody className={className}>{children}</tbody>
))`
  width: 100%;
  white-space: nowrap;
  border-left: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  border-right: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  border-bottom: 1px solid ${({ theme }) => theme.orbit.paletteCloudNormal};
  // TODO: create token
  // borderColorTable
`;

StyledTableBody.defaultProps = {
  theme: defaultTokens,
};

const TableBody = (props: Props) => <StyledTableBody>{props.children}</StyledTableBody>;

export default TableBody;
