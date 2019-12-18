// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import ChevronRight from "../../icons/ChevronRight";

import type { Props } from "./index";

const StyledBreadcrumbsItem = styled.li`
  display: flex;
  align-items: center;
`;

const StyledBreadcrumbsItemAnchor = styled(
  ({ active, component, children, isClickable, theme, ...props }) => {
    const Component = isClickable ? component : "div";
    return <Component {...props}>{children}</Component>;
  },
)`
  font-weight: ${({ active, theme }) => active && theme.orbit.fontWeightBold};
  color: ${({ theme }) => theme.orbit.paletteInkLight};
  text-decoration: none;

  ${({ isClickable }) =>
    isClickable &&
    css`
      transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;
      cursor: pointer;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.orbit.paletteInkLightHover};
        outline: none;
        text-decoration: underline;
      }
    `};
`;

StyledBreadcrumbsItemAnchor.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsItemIcon = styled(ChevronRight)`
  margin: 0 ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledBreadcrumbsItemIcon.defaultProps = {
  theme: defaultTheme,
};

// eslint-disable-next-line jsx-a11y/anchor-has-content
const DefaultComponent = props => <a {...props} />;

const BreadcrumbsItem = ({
  active,
  children,
  dataTest,
  onClick,
  href,
  contentKey,
  component = DefaultComponent,
  ...props
}: Props) => (
  <StyledBreadcrumbsItem
    data-test={dataTest}
    aria-current={active ? "page" : undefined}
    property="itemListElement"
    typeof="ListItem"
  >
    <StyledBreadcrumbsItemAnchor
      isClickable={href || onClick}
      href={href}
      component={component}
      active={active}
      onClick={onClick}
      property="item"
      typeof="WebPage"
      {...props}
    >
      <span property="name">{children}</span>
    </StyledBreadcrumbsItemAnchor>
    <meta property="position" content={contentKey} />
    {!active && <StyledBreadcrumbsItemIcon ariaHidden size="small" color="tertiary" />}
  </StyledBreadcrumbsItem>
);

export default BreadcrumbsItem;
