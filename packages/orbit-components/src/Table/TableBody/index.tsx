import * as React from "react";
import styled from "styled-components";

import type * as Common from "../../common/types";
import defaultTheme from "../../defaultTheme";

export const StyledTableBody = styled(({ children, className, dataTest }) => (
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

const TableBody: React.FC<React.PropsWithChildren<Common.Globals>> = ({ children, dataTest }) => (
  <StyledTableBody dataTest={dataTest}>{children}</StyledTableBody>
);

export default TableBody;
