// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../defaultTokens";
import Heading from "../../Heading/index";
import ChevronDown from "../../icons/ChevronDown";
import Text from "../../Text";

import type { Props } from "./index";

const StyledCardExpandableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.orbit.paletteWhite};
  border-top-left-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border-top-right-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  border: solid 1px ${({ theme }) => theme.orbit.paletteCloudNormal};
  box-sizing: border-box;
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  padding: ${({ theme }) => theme.orbit.spaceLarge};
  overflow: hidden;
`;

StyledCardExpandableHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledContentLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 ${({ theme }) => theme.orbit.spaceXSmall} 0;
  &:last-child {
    margin: 0;
  }
`;

StyledHeadingWrapper.defaultProps = {
  theme: defaultTokens,
};

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  align-items: center;
  margin: 0 ${({ theme }) => theme.orbit.spaceXSmall} 0 0;
`;

StyledIcon.defaultProps = {
  theme: defaultTokens,
};

const StyledContentRight = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: 0 0 0 ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledContentRight.defaultProps = {
  theme: defaultTokens,
};

const StyledIconRight = styled(ChevronDown)`
  transform: ${({ toggle }) => toggle && "rotate(-180deg)"};
  transition: ${({ theme }) => theme.orbit.durationFast};
`;

StyledIconRight.defaultProps = {
  theme: defaultTokens,
};

const Icon = ({ icon }: Props) => <StyledIcon>{icon}</StyledIcon>;

const CardExpandableHeader = (props: Props) => {
  const { icon, title, subTitle, suffix } = props;
  return (
    <StyledCardExpandableHeader>
      <StyledContentLeft>
        <React.Fragment>
          {title && (
            <StyledHeadingWrapper>
              {icon && <Icon icon={icon} />}
              <Heading type="title2" element="h2">
                {title}
              </Heading>
            </StyledHeadingWrapper>
          )}
          {subTitle && <Text>{subTitle}</Text>}
        </React.Fragment>
      </StyledContentLeft>
      <StyledContentRight>{suffix}</StyledContentRight>
    </StyledCardExpandableHeader>
  );
};

export default CardExpandableHeader;
