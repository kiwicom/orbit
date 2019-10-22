// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import { warning } from "@kiwicom/js";

import transition from "../../utils/transition";
import { right, left, rtlSpacing } from "../../utils/rtl";
import defaultTheme from "../../defaultTheme";
import STATES from "./consts";
import mq from "../../utils/mediaQuery";
import getCssState from "./helpers/getCssState";

import type { Props } from ".";

const StyledNavigationListItem = styled(
  ({ selected, theme, asComponent, dataTest, selectable, ...props }) => {
    const Component = props.href ? "a" : asComponent;
    return <Component data-test={dataTest} type={!props.href ? "button" : undefined} {...props} />;
  },
)`
  display: flex;
  text-decoration: none;
  position: relative;
  color: ${({ theme, selected, selectable }) =>
    selectable && selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkNormal};
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: transparent;
  height: 44px;
  padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceLarge}`)};
  ${mq.largeMobile(css`
    height: 32px;
    padding: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.orbit.spaceXXLarge}`)};
  `)};
  width: 100%;
  transition: ${transition(["background-color", "box-shadow", "color"], "fast", "ease-in-out")};
  ${({ theme, selected, selectable }) =>
    selectable &&
    selected &&
    css`
      :after {
        display: block;
        position: absolute;
        ${left}: 0;
        content: "";
        background-color: ${theme.orbit.paletteProductNormal};
        height: 100%;
        width: 3px;
        top: 0;
      }
    `};
  &:hover {
    ${getCssState(STATES.HOVER)};
  }
  &:focus {
    ${getCssState(STATES.FOCUS)};
  }
`;

StyledNavigationListItem.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationListItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavigationListItemIcon = styled.div`
  display: flex;
  align-items: center;
  margin-${right}: ${({ theme, hasMargin }) => hasMargin && theme.orbit.spaceXSmall};
  height: ${({ theme }) => theme.orbit.lineHeightTextNormal};
  
  svg {
    height: ${({ theme }) => theme.orbit.widthIconSmall};
    width: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

StyledNavigationListItemIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationListItemContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  line-height: 20px;
`;

StyledNavigationListItemContent.defaultProps = {
  theme: defaultTheme,
};

// eslint-disable-next-line react/button-has-type
const DefaultComponent = props => <button {...props} />;

const NavigationListItem = ({
  icon,
  children,
  ariaLabel,
  selectable = false,
  selected,
  href,
  external,
  onClick,
  asComponent = DefaultComponent,
  dataTest,
  tabIndex,
}: Props) => {
  warning(
    !(!children && !ariaLabel),
    "Warning: children or ariaLabel property is missing on NavigationListItem. Use ariaLabel property to add aria-label to be accessible for screen readers. More information https://orbit.kiwi/components/NavigationListItem/",
  );
  return (
    <StyledNavigationListItem
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onClick={onClick}
      selected={selected}
      selectable={selectable}
      asComponent={asComponent}
      href={href}
      dataTest={dataTest}
      rel={href && external ? "noopener noreferrer" : undefined}
      target={href && external ? "_blank" : undefined}
    >
      <StyledNavigationListItemWrapper>
        {icon && (
          <StyledNavigationListItemIcon hasMargin={!!children}>{icon}</StyledNavigationListItemIcon>
        )}
        {children && <StyledNavigationListItemContent>{children}</StyledNavigationListItemContent>}
      </StyledNavigationListItemWrapper>
    </StyledNavigationListItem>
  );
};

export default NavigationListItem;
