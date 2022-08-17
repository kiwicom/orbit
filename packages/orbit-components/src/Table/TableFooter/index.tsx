import * as React from "react";
import styled from "styled-components";

import { TableFooter as TableFooterType } from "./index.d";
import defaultTheme from "../../defaultTheme";

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

StyledTableFooter.defaultProps = {
  theme: defaultTheme,
};

const TableFooter: typeof TableFooterType = ({ children, dataTest }) => (
  <StyledTableFooter dataTest={dataTest}>{children}</StyledTableFooter>
);

export default TableFooter;
