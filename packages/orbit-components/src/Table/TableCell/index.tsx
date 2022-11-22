import * as React from "react";
import styled, { css } from "styled-components";

import type { Theme } from "../../defaultTheme";
import defaultTheme from "../../defaultTheme";
import { ALIGN_OPTIONS } from "./consts";
import { TYPE_AS } from "../consts";
import { textAlign } from "../../utils/rtl";
import type { Props } from "./types";

interface StyledProps extends Partial<Props> {
  theme: Theme;
}

export const StyledTableCell = styled(
  ({ element: Component, children, className, dataTest, scope }) => (
    <Component className={className} data-test={dataTest} scope={scope}>
      {children}
    </Component>
  ),
)`
  ${({ theme, whiteSpace, verticalAlign, align }: StyledProps) => css`
    box-sizing: border-box;
    font-family: ${theme.orbit.fontFamily};
    font-size: ${theme.orbit.fontSizeTextNormal};
    color: ${theme.orbit.paletteInkNormal};
    text-align: ${align && textAlign(align)};
    white-space: ${whiteSpace};
    vertical-align: ${verticalAlign};
  `}
`;

StyledTableCell.defaultProps = {
  theme: defaultTheme,
};

const TableCell = ({
  align = ALIGN_OPTIONS.LEFT,
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
