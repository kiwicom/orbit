// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";

import type { Props } from "./CardSection";

export const StyledCardSection = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spaceLarge};
  box-sizing: border-box;
  border-top: ${({ theme }) =>
    `${theme.borderWidthCard} ${theme.borderStyleCard} ${theme.borderColorCard}`};

  &:first-of-type {
    border: 0;
  }
`;

const CardSection = ({ children, theme = defaultTokens }: Props) => (
  <StyledCardSection theme={theme}>{children}</StyledCardSection>
);

export default CardSection;
