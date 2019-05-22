// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import Heading, { StyledHeading } from "../../Heading";
import { rtlSpacing } from "../../utils/rtl";

import type { Props } from "./index";

export const StyledCardHeader = styled.div`
  position: relative;
  width: 100%;
  padding-top: ${({ theme }) => theme.orbit.spaceSmall};
  padding-bottom: ${({ theme }) => theme.orbit.spaceSmall};
  box-sizing: border-box;
  color: ${({ theme }) => theme.orbit.colorHeading};
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

const StyledIcon = styled.div`
  color: ${({ theme }) => theme.orbit.colorHeading};
  display: flex;
  align-items: center;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.orbit.spaceSmall} 0 0`)};
`;

StyledIcon.defaultProps = {
  theme: defaultTheme,
};

const CardHeader = ({ icon, title, actions, dataTest, dataA11ySection }: Props) => (
  <StyledCardHeader data-test={dataTest}>
    <StyledHeadingWrapper>
      {icon && <StyledIcon>{icon}</StyledIcon>}
      {title && (
        <Heading type="title3" element="h2" dataA11ySection={dataA11ySection}>
          {title}
        </Heading>
      )}
      {actions}
    </StyledHeadingWrapper>
  </StyledCardHeader>
);
CardHeader.displayName = "CardHeader";
export default CardHeader;
