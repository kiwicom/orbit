// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import { ALIGN_OPTIONS, TYPE_AS } from "./consts";
import { textAlign } from "../../utils/rtl";

import type { Props } from ".";

export const StyledTableCell = styled(
  ({ element: Component, children, className, dataTest, scope }) => (
    <Component className={className} data-test={dataTest} scope={scope}>
      {children}
    </Component>
  ),
)`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  color: ${({ theme }) => theme.orbit.colorInkNormal};
  text-align: ${({ align }) => textAlign(align)};
  white-space: ${({ whiteSpace }) => whiteSpace};
  vertical-align: ${({ verticalAlign }) => verticalAlign};
`;

StyledTableCell.defaultProps = {
  theme: defaultTheme,
};

const TableCell = ({
  align = ALIGN_OPTIONS.CENTER,
  scope,
  as = TYPE_AS.TD,
  verticalAlign,
  whiteSpace,
  dataTest,
  children,
}: Props) => {
  return (
    <StyledTableCell
      verticalAlign={verticalAlign}
      whiteSpace={whiteSpace}
      align={align}
      dataTest={dataTest}
      scope={scope}
      element={as}
    >
      {children}
    </StyledTableCell>
  );
};

export default TableCell;
