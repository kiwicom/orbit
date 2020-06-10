// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContentChildren";

const StyledButtonPrimitiveContentChildren = styled.div`
  display: inline-block;
  width: 100%;
  text-align: ${({ hasIcon }) => hasIcon && "left"};
`;

StyledButtonPrimitiveContentChildren.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContentChildren = ({ children, hasIcon }: Props) => (
  <StyledButtonPrimitiveContentChildren hasIcon={hasIcon}>
    {children}
  </StyledButtonPrimitiveContentChildren>
);

export default ButtonPrimitiveContentChildren;
