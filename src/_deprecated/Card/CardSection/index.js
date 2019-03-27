// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../../defaultTheme";

import type { Props } from "./index";

export const StyledCardSection = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  box-sizing: border-box;
  border-top: ${({ theme }) =>
    `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${theme.orbit.borderColorCard}`};

  &:first-of-type {
    border: 0;
  }
`;

StyledCardSection.defaultProps = {
  theme: defaultTheme,
};

const CardSection = ({ children, dataTest }: Props) => (
  <StyledCardSection data-test={dataTest}>{children}</StyledCardSection>
);

export default CardSection;
