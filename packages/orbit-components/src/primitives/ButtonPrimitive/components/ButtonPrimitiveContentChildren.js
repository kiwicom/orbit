// @flow
import * as React from "react";
import styled from "styled-components";

import { left } from "../../../utils/rtl";
import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContentChildren";

const StyledButtonPrimitiveContentChildren = styled.div`
  display: inline-block;
  width: ${({ contentWidth }) => contentWidth};
  text-align: ${({ hasIcon }) => hasIcon && left};
`;

StyledButtonPrimitiveContentChildren.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContentChildren = ({ children, hasIcon, contentWidth }: Props): React.Node => (
  <StyledButtonPrimitiveContentChildren hasIcon={hasIcon} contentWidth={contentWidth}>
    {children}
  </StyledButtonPrimitiveContentChildren>
);

export default ButtonPrimitiveContentChildren;
