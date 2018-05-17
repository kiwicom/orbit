// @flow
import * as React from "react";
import styled from "styled-components";
import defaultTokens from "@kiwicom/orbit-design-tokens";

import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";
import type { Props } from "./CardHeader";

export const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spaceLarge};
  box-sizing: border-box;
  color: ${({ theme }) => theme.colorHeading};
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
`;

const StyledSubTitle = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spaceXSmall};
`;

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.colorHeading};
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.spaceXSmall};
`;

const CardHeader = ({ icon, title, subTitle, theme = defaultTokens }: Props) => (
  <StyledCardHeader theme={theme}>
    <StyledHeadingWrapper theme={theme}>
      {icon && <StyledIcon theme={theme}>{icon}</StyledIcon>}
      <Heading type="title2" element="h2">
        {title}
      </Heading>
    </StyledHeadingWrapper>
    {subTitle && (
      <StyledSubTitle theme={theme}>
        <Text>{subTitle}</Text>
      </StyledSubTitle>
    )}
  </StyledCardHeader>
);

export default CardHeader;
