// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

export const StyledTableFooter = styled(({ children, className, dataTest }) => (
  <tfoot className={className} data-test={dataTest}>
    {children}
  </tfoot>
))`
  width: 100%;
  white-space: nowrap;
  background: ${({ theme }) => theme.orbit.paletteCloudDark};
  font-weight: bold;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledTableFooter.defaultProps = {
  theme: defaultTheme,
};

const TableFooter = ({ children, dataTest }: Props) => (
  <StyledTableFooter dataTest={dataTest}>{children}</StyledTableFooter>
);

export default TableFooter;
