// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

import type { Props } from "./index";

export const StyledCardContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  padding: ${({ theme }) => theme.orbit.spaceLarge};
`;

StyledCardContent.defaultProps = {
  theme: defaultTheme,
};

const CardContent = ({ children, dataTest }: Props) => (
  <StyledCardContent data-test={dataTest}>{children}</StyledCardContent>
);

export default CardContent;
