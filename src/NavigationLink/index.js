// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import transition from "../utils/transition";
import { right, left } from "../utils/rtl";
import defaultTheme from "../defaultTheme";
import { ICON_COLORS } from "../Icon/consts";
import TYPES from "./consts";
import getPadding from "./helpers/getPadding";
import getLineStyles from "./helpers/getLineStyles";
import getHeight from "./helpers/getHeight";
import getBorderRadius from "./helpers/getBorderRadius";

import type { Props } from ".";

const STATES = {
  HOVER: "hover",
  FOCUS: "focus",
};
const getState = state => ({ theme, selectable, type }) => {
  if (state === STATES.HOVER) {
    return css`
      background-color: ${theme.orbit.paletteCloudLightHover};
    `;
  }
  if (state === STATES.FOCUS) {
    return css`
      background-color: ${theme.orbit.paletteCloudLightHover};
      ${(!selectable || type !== TYPES.VERTICAL) &&
        css`
          box-shadow: 0 0 0 2px ${theme.orbit.paletteCloudLightActive};
        `};
    `;
  }
  return null;
};

const StyledNavigationLink = styled(
  ({ selected, type, theme, asComponent, dataTest, selectable, ...props }) => {
    const Component = props.href ? "a" : asComponent;
    return <Component data-test={dataTest} {...props} />;
  },
)`
  position: relative;
  color: ${({ theme, selected }) =>
    selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkNormal};
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: transparent;
  height: ${getHeight};
  padding: ${getPadding};
  border-radius: ${getBorderRadius};
  width: ${({ type }) => type === TYPES.VERTICAL && "100%"};
  transition: ${transition(["background-color", "box-shadow"], "fast", "ease-in-out")};
  ${({ theme, selected }) =>
    selected &&
    css`
      :after {
        display: block;
        position: absolute;
        ${left}: 0;
        content: "";
        background-color: ${theme.orbit.paletteProductNormal};
        ${getLineStyles};
      }
    `};
  &:hover {
    ${getState(STATES.HOVER)};
  }
  &:focus {
    ${getState(STATES.FOCUS)};
  }
`;

StyledNavigationLink.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationLinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavigationLinkIcon = styled.div`
  margin-${right}: ${({ theme, hasMargin }) => hasMargin && theme.orbit.spaceXSmall};
  
  svg {
    height: ${({ theme }) => theme.orbit.widthIconSmall};
    width: ${({ theme }) => theme.orbit.heightIconSmall};
  }
`;

StyledNavigationLinkIcon.defaultProps = {
  theme: defaultTheme,
};

const StyledNavigationLinkContent = styled.div`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  line-height: 20px;
`;

StyledNavigationLinkContent.defaultProps = { theme: defaultTheme };

// eslint-disable-next-line react/button-has-type
const DefaultComponent = props => <button {...props} />;

const NavigationLink = ({
  icon,
  children,
  selectable = false,
  selected,
  href,
  external,
  onClick,
  asComponent = DefaultComponent,
  dataTest,
  type = TYPES.HORIZONTAL,
}: Props) => {
  const iconColor = React.useMemo(() => (selected ? ICON_COLORS.PRODUCT : ICON_COLORS.PRIMARY), [
    selected,
  ]);
  return (
    <StyledNavigationLink
      onClick={onClick}
      selected={selected}
      selectable={selectable}
      asComponent={asComponent}
      href={href}
      dataTest={dataTest}
      rel={href && external ? "noopener noreferrer" : undefined}
      target={href && external ? "_blank" : undefined}
      type={type}
    >
      <StyledNavigationLinkWrapper>
        {icon && (
          <StyledNavigationLinkIcon hasMargin={!!children}>
            {React.cloneElement(icon, { color: iconColor })}
          </StyledNavigationLinkIcon>
        )}
        <StyledNavigationLinkContent>{children}</StyledNavigationLinkContent>
      </StyledNavigationLinkWrapper>
    </StyledNavigationLink>
  );
};

export default NavigationLink;
