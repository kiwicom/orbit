// @flow
import * as React from "react";
import styled from "styled-components";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import Close from "../icons/Close";
import ButtonLink from "../ButtonLink/ButtonLink";
import { StyledCardSection } from "./CardSection/CardSection";
import { StyledCardHeader } from "./CardHeader/CardHeader";
import { StyledCardContent } from "./CardContent/CardContent";
import type { Props } from "./Card";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadiusNormal};
  border-width: ${({ theme }) => theme.borderWidthCard};
  border-style: ${({ theme }) => theme.borderStyleCard};
  border-color: ${({ theme }) => theme.borderColorCard};
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
 
  ${StyledCardHeader} {
    padding-right: ${({ theme, closable }) => closable && theme.spaceLarge};
  }
 
  ${StyledCardHeader} + ${StyledCardSection}, ${StyledCardHeader} + ${StyledCardContent} {
    padding-top: 0;
    border-top: 0;
  }
  
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Card = ({ closable, onClose, children, theme = defaultTokens }: Props) => (
  <StyledCard theme={theme} closable={closable}>
    {closable && (
      <CloseContainer theme={theme}>
        <ButtonLink type="secondary" size="small" icon={<Close />} onClick={onClose} transparent />
      </CloseContainer>
    )}
    {children}
  </StyledCard>
);

export default Card;
