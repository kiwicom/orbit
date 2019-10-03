// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import Text from "../Text";
import { StyledButtonLink } from "../ButtonLink";
import { TOKENS, TYPES as BUTTON_TYPES } from "../ButtonLink/consts";
import getTypeToken from "../ButtonLink/helpers/getTypeToken";
import defaultTheme from "../defaultTheme";
import { rtlSpacing, right } from "../utils/rtl";
import TYPES from "./consts";
import NavigationListSeparator, {
  StyledNavigationListSeparator,
} from "./components/NavigationListSeparator";
import { isNavigation, isInline } from "./helpers/isType";

import type { Props } from ".";

const StyledNavigationListContent = styled(({ type, theme, ...props }) => <ul {...props} />)`
  display: flex;
  width: 100%;
  flex-direction: ${({ type }) => (isNavigation(type) ? "column" : "row")};
  list-style: none;
  padding: 0;
  ${({ type }) =>
    isInline(type) &&
    css`
      ${StyledButtonLink} {
        padding: 0 ${({ theme }) => theme.orbit.spaceXSmall};
        :hover {
          color: ${({ theme }) =>
            getTypeToken(TOKENS.colorTextButtonHover)({
              theme,
              type: BUTTON_TYPES.PRIMARY,
            })}!important;
        }
      }
    `};
  ${({ type }) =>
    isNavigation(type)
      ? css`
          margin: ${({ theme }) => rtlSpacing(`0 0 ${theme.orbit.spaceLarge} 0`)};
        `
      : css`
          margin: 0;
        `};
`;

StyledNavigationListContent.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationList = styled(({ theme, type, ...props }) => <div {...props} />)`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ type }) =>
    isNavigation(type)
      ? css`
          padding: ${({ theme }) => rtlSpacing(`0 0 ${theme.orbit.spaceLarge} 0`)};
          :first-child {
            padding-top: ${({ theme }) => theme.orbit.spaceLarge};
          }
          :last-child {
            padding-bottom: 0;
            ${StyledNavigationListSeparator} {
              display: none;
            }
            ${StyledNavigationListContent} {
              margin: 0;
            }
          }
        `
      : css`
          > * {
            margin-${right}: 4px;
          }
        `};
`;

StyledNavigationList.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationListTitle = styled.div`
  padding: 0 ${({ theme }) => theme.orbit.spaceMedium};
  ${mq.largeMobile(css`
    padding: 0 ${({ theme }) => theme.orbit.spaceXLarge};
  `)};
`;

StyledNavigationListTitle.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationListChild = styled.li``;

const NavigationList = ({ children, title, dataTest, type = TYPES.NAVIGATION }: Props) => (
  <StyledNavigationList data-test={dataTest} type={type}>
    {title && (
      <StyledNavigationListTitle>
        <Text type="secondary" weight="bold" uppercase size="small" spaceAfter="normal">
          {title}
        </Text>
      </StyledNavigationListTitle>
    )}
    <StyledNavigationListContent type={type}>
      {React.Children.map(children, item => (
        <StyledNavigationListChild>
          {React.isValidElement(item) ? React.cloneElement(item) : item}
        </StyledNavigationListChild>
      ))}
    </StyledNavigationListContent>
    {isNavigation(type) && <NavigationListSeparator />}
  </StyledNavigationList>
);

export default NavigationList;

export { default as NavigationListItem } from "./NavigationListItem";
