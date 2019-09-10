// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import Text from "../Text";
import defaultTheme from "../defaultTheme";
import Separator from "../Separator";
import { rtlSpacing } from "../utils/rtl";
import TYPES from "./consts";

import type { Props } from ".";

const StyledNavigationGroupSeparator = styled.div`
  padding: 0 ${({ theme }) => theme.orbit.spaceMedium};
  ${mq.tablet(css`
    padding: 0 ${({ theme }) => theme.orbit.spaceXLarge};
  `)};
`;

StyledNavigationGroupSeparator.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationGroupContent = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => rtlSpacing(`0 0 ${theme.orbit.spaceLarge} 0`)};
`;

StyledNavigationGroupContent.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationGroup = styled.div`
  display: flex;
  flex-direction: ${({ type }) => (type === TYPES.NAVIGATION_BOX ? "column" : "row")};
  width: 100%;
  padding: ${({ theme }) => rtlSpacing(`0 0 ${theme.orbit.spaceLarge} 0`)};

  ${StyledNavigationGroupSeparator} {
    ${({ type }) =>
      type === TYPES.NAVIGATION_BOX &&
      css`
        display: block;
      `};
  }

  :first-child {
    padding-top: ${({ theme }) => theme.orbit.spaceLarge};
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
  padding: 0 ${({ theme }) => theme.orbit.spaceMedium};
  ${mq.tablet(css`
    padding: 0 ${({ theme }) => theme.orbit.spaceXLarge};
  `)};
`;

StyledNavigationGroupTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationGroupChild = styled.li``;

const NavigationGroup = ({ children, title, dataTest, type = TYPES.NAVIGATION_BOX }: Props) => (
  <StyledNavigationGroup data-test={dataTest}>
    {title && (
      <StyledNavigationGroupTitle>
        <Text type="secondary" weight="bold" uppercase size="small" spaceAfter="normal">
          {title}
        </Text>
      </StyledNavigationGroupTitle>
    )}
    <StyledNavigationGroupContent>
      {React.Children.map(children, item => (
        <StyledNavigationGroupChild>{React.cloneElement(item)}</StyledNavigationGroupChild>
      ))}
    </StyledNavigationGroupContent>
    <StyledNavigationGroupSeparator>
      <Separator spaceAfter="none" />
    </StyledNavigationGroupSeparator>
  </StyledNavigationGroup>
);

export default NavigationGroup;
