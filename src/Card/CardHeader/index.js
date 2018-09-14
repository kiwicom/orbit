// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import Heading from "../../Heading";
import Text from "../../Text";

import type { Props } from "./index";

export const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  box-sizing: border-box;
  color: ${({ theme }) => theme.orbit.colorHeading};
`;

StyledCardHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledHeadingWrapper = styled.div`
  display: flex;
`;

const StyledSubTitle = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledSubTitle.defaultProps = {
  theme: defaultTokens,
};

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  align-items: center;
  margin-right: ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledIcon.defaultProps = {
  theme: defaultTokens,
};

const CardHeader = ({ icon, title, subTitle, dataTest }: Props) => (
  <StyledCardHeader data-test={dataTest}>
    <StyledHeadingWrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <Heading type="title2" element="h2">
        {title}
      </Heading>
    </StyledHeadingWrapper>
    {subTitle && (
      <StyledSubTitle>
        <Text>{subTitle}</Text>
      </StyledSubTitle>
    )}
  </StyledCardHeader>
);

export default CardHeader;
