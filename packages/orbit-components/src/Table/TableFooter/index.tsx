import * as React from "react";
import styled from "styled-components";

import type * as Common from "../../common/types";
import defaultTheme from "../../defaultTheme";

export const StyledTableFooter = styled(({ children, className, dataTest }) => (
  <tfoot className={className} data-test={dataTest}>
    {children}
  </tfoot>
))`
  width: 100%;
  white-space: nowrap;
  background: ${({ theme }) => theme.orbit.paletteCloudNormal};
  font-weight: bold;
`;

StyledTableFooter.defaultProps = {
  theme: defaultTheme,
};

const TableFooter: React.FC<React.PropsWithChildren<Common.Globals>> = ({ children, dataTest }) => (
  <StyledTableFooter dataTest={dataTest}>{children}</StyledTableFooter>
);

export default TableFooter;
