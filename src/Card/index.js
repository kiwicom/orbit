// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../defaultTokens";
import Close from "../icons/Close";
import ButtonLink from "../ButtonLink";
import { StyledCardSection } from "./CardSection";
import { StyledCardHeader } from "./CardHeader";
import { StyledCardContent } from "./CardContent";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from "./index";

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.orbit.backgroundCard};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-width: ${({ theme }) => theme.orbit.borderWidthCard};
  border-style: ${({ theme }) => theme.orbit.borderStyleCard};
  border-color: ${({ theme }) => theme.orbit.borderColorCard};
  box-sizing: border-box;
  position: relative;
  margin-bottom: ${getSpacingToken};
 
  ${StyledCardHeader} {
    padding-right: ${({ theme, closable }) => closable && theme.orbit.spaceLarge};
  }
 
  ${StyledCardHeader} + ${StyledCardSection}, ${StyledCardHeader} + ${StyledCardContent} {
    padding-top: 0;
    border-top: 0;
  }
  
`;

StyledCard.defaultProps = {
  theme: defaultTokens,
};

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

const Card = ({ closable, onClose, children, dataTest, spaceAfter }: Props) => (
  <StyledCard closable={closable} data-test={dataTest} spaceAfter={spaceAfter}>
    {closable && (
      <CloseContainer>
        <ButtonLink type="secondary" size="small" icon={<Close />} onClick={onClose} transparent />
      </CloseContainer>
    )}
    {children}
  </StyledCard>
);

export default Card;
