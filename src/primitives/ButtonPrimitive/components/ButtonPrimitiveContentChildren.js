// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContentChildren";

const StyledButtonPrimitiveContentChildren = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
`;

StyledButtonPrimitiveContentChildren.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContentChildren = ({ children }: Props) => (
  <StyledButtonPrimitiveContentChildren>{children}</StyledButtonPrimitiveContentChildren>
);

export default ButtonPrimitiveContentChildren;
