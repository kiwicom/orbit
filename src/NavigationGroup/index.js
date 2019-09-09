// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import Text from "../Text";
import defaultTheme from "../defaultTheme";
import Separator from "../Separator";

const StyledNavigationGroupSeparator = styled.div`
  padding: 0 16px;
  ${mq.tablet(css`
    padding: 0 32px;
  `)};
`;

StyledNavigationGroupSeparator.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationGroupContent = styled.div`
  margin-bottom: 24px;
`;

StyledNavigationGroupContent.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 0 20px 0;
  :first-child {
    padding-top: 20px;
  }
  :last-child {
    padding-bottom: 0;
    ${StyledNavigationGroupSeparator} {
      display: none;
    }
    ${StyledNavigationGroupContent} {
      margin: 0;
    }
  }
`;

StyledNavigationGroup.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationGroupTitle = styled.div`
  padding: 0 16px;
  ${mq.tablet(css`
    padding: 0 32px;
  `)};
`;

StyledNavigationGroupTitle.defaultProps = {
  theme: defaultTheme,
};

const NavigationGroup = ({ children, title }) => (
  <StyledNavigationGroup>
    {title && (
      <StyledNavigationGroupTitle>
        <Text type="secondary" weight="bold" uppercase size="small" spaceAfter="normal">
          {title}
        </Text>
      </StyledNavigationGroupTitle>
    )}
    <StyledNavigationGroupContent>{children}</StyledNavigationGroupContent>
    <StyledNavigationGroupSeparator>
      <Separator spaceAfter="none" />
    </StyledNavigationGroupSeparator>
  </StyledNavigationGroup>
);

export default NavigationGroup;
