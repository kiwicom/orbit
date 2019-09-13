// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import mq from "../utils/mediaQuery";
import Text from "../Text";
import { StyledButtonLink } from "../ButtonLink";
import { TOKENS, TYPES as BUTTON_TYPES } from "../ButtonLink/consts";
import getTypeToken from "../ButtonLink/helpers/getTypeToken";
import defaultTheme from "../defaultTheme";
import { rtlSpacing } from "../utils/rtl";
import TYPES from "./consts";
import NavigationListSeparator, {
  StyledNavigationListSeparator,
} from "./components/NavigationListSeparator";
import { isNavigationBox, isInline } from "./helpers/isType";

import type { Props } from ".";

const StyledNavigationListContent = styled(({ type, theme, ...props }) => <ul {...props} />)`
  display: flex;
  width: 100%;
  flex-direction: ${({ type }) => (isNavigationBox(type) ? "column" : "row")};
  list-style: none;
  padding: 0;
  ${({ type }) =>
    isInline(type) &&
    css`
      ${StyledButtonLink} {
        padding: 0 8px;
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
    isNavigationBox(type)
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
    isNavigationBox(type) &&
    css`
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

const NavigationList = ({ children, title, dataTest, type = TYPES.NAVIGATION_BOX }: Props) => (
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
        <StyledNavigationListChild>{React.cloneElement(item)}</StyledNavigationListChild>
      ))}
    </StyledNavigationListContent>
    {isNavigationBox(type) && <NavigationListSeparator />}
  </StyledNavigationList>
);

export default NavigationList;

export { default as NavigationListItem } from "./NavigationListItem";
