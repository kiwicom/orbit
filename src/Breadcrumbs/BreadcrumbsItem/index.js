// @flow
import * as React from "react";
import styled from "styled-components";

import defaultTheme from "../../defaultTheme";
import ChevronRight from "../../icons/ChevronRight";

import type { Props } from "./index";

const StyledBreadcrumbsItem = styled.li`
  display: flex;
  align-items: center;
`;

const StyledBreadcrumbsItemAnchor = styled(({ active, component, children, theme, ...props }) => {
  const Component = component;
  return <Component {...props}>{children}</Component>;
})`
  font-weight: ${({ active, theme }) => active && theme.orbit.fontWeightBold};
  color: ${({ theme }) => theme.orbit.paletteInkLight};
  text-decoration: none;
  transition: color ${({ theme }) => theme.orbit.durationFast} ease-in-out;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.orbit.paletteInkLightHover};
    outline: none;
    text-decoration: underline;
  }
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

const a: React$Node = "a";

const BreadcrumbsItem = ({
  active,
  children,
  dataTest,
  onClick,
  contentKey,
  component = a,
  ...props
}: Props) => (
  <StyledBreadcrumbsItem
    data-test={dataTest}
    aria-current={active ? "page" : undefined}
    property="itemListElement"
    typeof="ListItem"
  >
    <StyledBreadcrumbsItemAnchor
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
