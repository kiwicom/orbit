// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Heading, { StyledHeading } from "../../Heading";
import Text from "../../Text";
import { rtlSpacing } from "../../utils/rtl";
import media from "../../utils/mediaQuery";

import type { Props } from "./index";

export const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.orbit.spaceMedium};
  box-sizing: border-box;
  color: ${({ theme }) => theme.orbit.colorHeading};

  ${media.desktop(css`
    padding: ${({ theme }) => theme.orbit.spaceLarge};
  `)}
`;

StyledCardHeader.defaultProps = {
  theme: defaultTheme,
};

const StyledHeadingWrapper = styled.div`
  display: flex;
  align-items: center;

  ${StyledHeading} {
    width: 100%;
  }
`;

const StyledSubTitle = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.orbit.spaceXXSmall};
`;

StyledSubTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  align-items: center;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};
`;

StyledIcon.defaultProps = {
  theme: defaultTheme,
};

const CardHeader = ({ icon, title, subTitle, actions, dataTest, dataA11ySection }: Props) => (
  <StyledCardHeader data-test={dataTest}>
    <StyledHeadingWrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      <Heading type="title3" element="h2" dataA11ySection={dataA11ySection}>
        {title}
      </Heading>
      {actions}
    </StyledHeadingWrapper>
    {subTitle && (
      <StyledSubTitle>
        <Text>{subTitle}</Text>
      </StyledSubTitle>
    )}
  </StyledCardHeader>
);
CardHeader.displayName = "CardHeader";
export default CardHeader;
