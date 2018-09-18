// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTokens from "../../../defaultTokens";
import Heading from "../../../Heading/index";
import ChevronDown from "../../../icons/ChevronDown";

import type { Props } from "./index";

export const StyledCardExpandableSectionHeader = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  box-sizing: border-box;
  color: ${({ theme }) => theme.orbit.colorHeading};
  transition: background ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
`;

StyledCardExpandableSectionHeader.defaultProps = {
  theme: defaultTokens,
};

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.orbit.spaceXXSmall};
  &:last-child {
    margin: 0;
  }
`;

StyledHeadingWrapper.defaultProps = {
  theme: defaultTokens,
};

const StyledChildren = styled.div`
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  color: ${({ theme }) => theme.orbit.colorTextPrimary};
  margin-left: ${({ theme, icon }) => icon && theme.orbit.spaceXLarge};
`;

StyledChildren.defaultProps = {
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

const StyledIconRightWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  padding-left: ${({ theme }) => theme.orbit.spaceMedium};
`;

StyledIconRightWrapper.defaultProps = {
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

const CardExpandableSectionHeader = (props: Props) => {
  const { icon, onClick, toggle } = props;
  const children = props.children && (
    <StyledChildren icon={props.icon}>{props.children}</StyledChildren>
  );
  const title = props.title && (
    <Heading type="title3" element="h3">
      {props.title}
    </Heading>
  );

  return (
    <StyledCardExpandableSectionHeader onClick={onClick}>
      <StyledContent>
        <React.Fragment>
          {title && (
            <StyledHeadingWrapper>
              {icon && <Icon icon={icon} />}
              {title}
            </StyledHeadingWrapper>
          )}
          {children}
        </React.Fragment>
      </StyledContent>
      <StyledIconRightWrapper>
        <StyledIconRight size="medium" color="secondary" toggle={toggle} />
      </StyledIconRightWrapper>
    </StyledCardExpandableSectionHeader>
  );
};

export default CardExpandableSectionHeader;
