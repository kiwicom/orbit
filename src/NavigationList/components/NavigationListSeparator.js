// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import Separator from "../../Separator/index";
import mq from "../../utils/mediaQuery/index";
import defaultTheme from "../../defaultTheme";

export const StyledNavigationListSeparator = styled.div`
  padding: 0 ${({ theme }) => theme.orbit.spaceMedium};
  ${mq.largeMobile(css`
    padding: 0 ${({ theme }) => theme.orbit.spaceXLarge};
  `)};
`;

StyledNavigationListSeparator.defaultProps = {
  theme: defaultTheme,
};

const NavigationListSeparator = () => (
  <StyledNavigationListSeparator>
    <Separator spaceAfter="none" />
  </StyledNavigationListSeparator>
);

export default NavigationListSeparator;
