// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";

import type { Props } from ".";

export const StyledTableFooter: any = styled(({ children, className, dataTest }) => (
  <tfoot className={className} data-test={dataTest}>
    {children}
  </tfoot>
))`
  width: 100%;
  white-space: nowrap;
  background: ${({ theme }) => theme.orbit.paletteCloudDark};
  font-weight: bold;
`;

StyledTableFooter.defaultProps = {
  theme: defaultTheme,
};

const TableFooter = ({ children, dataTest }: Props): React.Node => (
  <StyledTableFooter dataTest={dataTest}>{children}</StyledTableFooter>
);

export default TableFooter;
