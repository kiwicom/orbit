// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

export const StyledTableBody: any = styled(({ children, className, dataTest }) => (
  <tbody className={className} data-test={dataTest}>
    {children}
  </tbody>
))`
  ${({ theme }) => css`
    width: 100%;
    white-space: nowrap;
    border-bottom: 1px solid ${theme.orbit.paletteCloudNormal};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTableBody.defaultProps = {
  theme: defaultTheme,
};

const TableBody = ({ children, dataTest }: Props): React.Node => (
  <StyledTableBody dataTest={dataTest}>{children}</StyledTableBody>
);

export default TableBody;
