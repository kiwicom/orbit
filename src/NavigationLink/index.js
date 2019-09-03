// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import transition from "../utils/transition";
import { right } from "../utils/rtl";
import defaultTheme from "../defaultTheme";
import { ICON_COLORS } from "../Icon/consts";
import TYPES from "./consts";
import getPadding from "./helpers/getPadding";
import getLineStyles from "./helpers/getLineStyles";

const getHeight = ({ type, selectable }) => {
  if (type === TYPES.HORIZONTAL) {
    if (selectable) {
      return "64px";
    }
    return "44px";
  }
  return null;
};

const getBorderRadius = ({ type, selectable, theme }) => {
  if (type === TYPES.HORIZONTAL && !selectable) {
    return theme.orbit.borderRadiusNormal;
  }
  return null;
};

const STATES = {
  HOVER: "hover",
  FOCUS: "focus",
};
const getState = state => ({ theme, selectable }) => {
  if (state === STATES.HOVER) {
    return css`
      background-color: ${theme.orbit.paletteCloudLightHover};
    `;
  }
  if (state === STATES.FOCUS) {
    return css`
      background-color: ${theme.orbit.paletteCloudLightHover};
      ${!selectable &&
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  font-size: ${({ theme }) => theme.orbit.fontSizeTextNormal};
  font-weight: ${({ theme }) => theme.orbit.fontWeightMedium};
  color: ${({ theme, selected }) =>
    selected ? theme.orbit.paletteProductNormal : theme.orbit.paletteInkNormal};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  cursor: pointer;
  border: 0;
  outline: none;
  background-color: transparent;
  height: ${getHeight};
  padding: ${getPadding};
  border-radius: ${getBorderRadius};
  transition: ${transition(["background-color", "box-shadow"], "fast", "ease-in-out")};
  ${({ theme, selected }) =>
    selected &&
    css`
      :after {
        display: block;
        position: absolute;
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
  margin-${right}: ${({ theme }) => theme.orbit.spaceXSmall};
`;

StyledNavigationLinkIcon.defaultProps = {
  theme: defaultTheme,
};

const NavigationLink = ({
  icon,
  children,
  selectable = false,
  selected,
  href,
  external,
  onClick,
  asComponent = "button",
  dataTest,
  type = TYPES.HORIZONTAL,
}) => {
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
          <StyledNavigationLinkIcon>
            {React.cloneElement(icon, { color: iconColor })}
          </StyledNavigationLinkIcon>
        )}
        {children}
      </StyledNavigationLinkWrapper>
    </StyledNavigationLink>
  );
};

export default NavigationLink;
