// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

export const StyledTableBody: any = styled(({ children, className, dataTest }) => (
  <tbody className={className} data-test={dataTest}>
    {children}
  </tbody>
))`
  width: 100%;
  white-space: nowrap;
  border-bottom: 1px solid ${({ theme }) => theme.orbit.borderColorTable};
`;

StyledTableBody.defaultProps = {
  theme: defaultTheme,
};

const TableBody = ({ children, dataTest }: Props): React.Node => (
  <StyledTableBody dataTest={dataTest}>{children}</StyledTableBody>
);

export default TableBody;
