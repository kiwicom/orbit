// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import { right, rtlSpacing } from "../utils/rtl";
import defaultTheme from "../defaultTheme";
import { ICON_COLORS } from "../Icon/consts";

const TYPES = {
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical",
};

const getLineStyles = ({ type }) => {
  if (type === TYPES.HORIZONTAL) {
    return css`
      width: 100%;
      height: 3px;
      left: 0;
      right: 0;
      bottom: 0;
    `;
  }
  if (type === TYPES.VERTICAL) {
    return css`
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
    `;
  }
  return null;
};

const getPadding = ({ type, theme }) => {
  if (type === TYPES.HORIZONTAL) {
    return "0 8px";
  }
  if (type === TYPES.VERTICAL) {
    return rtlSpacing(
      `${theme.orbit.spaceXXXSmall} ${theme.orbit.spaceXSmall} ${theme.orbit.spaceXXXSmall} ${
        theme.orbit.spaceXXLarge
      }`,
    );
  }
  return null;
};
const StyledNavigationLink = styled(
  ({ selected, type, theme, asComponent, dataTest, ...props }) => {
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
  background-color: transparent;
  height: ${({ type }) => type === TYPES.HORIZONTAL && "64px"};
  padding: ${getPadding};
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
  selected,
  href,
  external,
  onClick,
  asComponent = "div",
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
