// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { left } from "../../../utils/rtl";
import mq from "../../../utils/mediaQuery";
import defaultTheme from "../../../defaultTheme";
import type { Props } from "./ButtonPrimitiveContentChildren";

const StyledButtonPrimitiveContentChildren = styled.div`
  display: inline-block;
  width: 100%;
  text-align: ${left};
  ${mq.tablet(css`
    text-align: center;
  `)};
`;

StyledButtonPrimitiveContentChildren.defaultProps = {
  theme: defaultTheme,
};

const ButtonPrimitiveContentChildren = ({ children }: Props) => (
  <StyledButtonPrimitiveContentChildren>{children}</StyledButtonPrimitiveContentChildren>
);

export default ButtonPrimitiveContentChildren;
