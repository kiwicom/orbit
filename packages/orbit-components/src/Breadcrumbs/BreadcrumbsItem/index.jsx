// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import ChevronRight from "../../icons/ChevronRight";

import type { Props } from ".";

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
  ${({ theme, active, isClickable }) => css`
    font-weight: ${active ? theme.orbit.fontWeightBold : theme.orbit.fontWeightMedium};
    color: ${theme.orbit.paletteInkDark};
    text-decoration: ${isClickable && !active ? "underline" : "none"};

    ${isClickable &&
    css`
      transition: color ${theme.orbit.durationFast} ease-in-out;
      cursor: pointer;
      border: none;
      background-color: inherit;
      padding: 0;
      outline-offset: 1px;
      font-size: inherit;
      font-weight: inherit;

      &:hover {
        text-decoration: none;
        color: ${theme.orbit.paletteProductNormalHover};
      }
    `};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBreadcrumbsItemAnchor.defaultProps = {
  theme: defaultTheme,
};

const StyledBreadcrumbsItemIcon = styled(ChevronRight)`
  ${({ theme }) => css`
    margin: 0 ${theme.orbit.spaceXXSmall};
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledBreadcrumbsItemIcon.defaultProps = {
  theme: defaultTheme,
};

const DefaultComponent = (props: Props) =>
  // eslint-disable-next-line react/button-has-type, jsx-a11y/anchor-has-content
  props.onClick && !props.href ? <button {...props} /> : <a {...props} />;

const BreadcrumbsItem = ({
  active,
  children,
  dataTest,
  onClick,
  href,
  contentKey,
  component,
  id,
  ...props
}: Props): React.Node => {
  return (
    <StyledBreadcrumbsItem
      data-test={dataTest}
      aria-current={active ? "page" : undefined}
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
    >
      <StyledBreadcrumbsItemAnchor
        isClickable={href || onClick}
        href={href}
        component={component || DefaultComponent}
        active={active}
        onClick={onClick}
        itemScope
        itemType="http://schema.org/WebPage"
        itemProp="item"
        itemID={id || href}
        {...props}
      >
        <span itemProp="name">{children}</span>
      </StyledBreadcrumbsItemAnchor>
      <meta itemProp="position" content={contentKey} />
      {!active && (
        <StyledBreadcrumbsItemIcon ariaHidden reverseOnRtl size="small" color="tertiary" />
      )}
    </StyledBreadcrumbsItem>
  );
};

export default BreadcrumbsItem;
