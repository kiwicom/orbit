// @flow
import * as React from "react";
import styled from "styled-components";

import { ICON_SIZES, ICON_COLORS } from "./consts";
import defaultTokens from "../defaultTokens";

import type { Props } from "./index";

const getSize = () => ({ theme, size }) => {
  const tokens = {
    [ICON_SIZES.SMALL]: theme.orbit.widthIconSmall,
    [ICON_SIZES.MEDIUM]: theme.orbit.widthIconMedium,
    [ICON_SIZES.LARGE]: theme.orbit.widthIconLarge,
  };
  return tokens[size];
};

const getColor = () => ({ theme, color }) => {
  const tokens = {
    [ICON_COLORS.ATTENTION]: theme.orbit.colorIconAttention,
    [ICON_COLORS.PRIMARY]: theme.orbit.colorIconPrimary,
    [ICON_COLORS.SECONDARY]: theme.orbit.colorIconSecondary,
    [ICON_COLORS.TERTIARY]: theme.orbit.colorIconTertiary,
    [ICON_COLORS.INFO]: theme.orbit.colorIconInfo,
    [ICON_COLORS.SUCCESS]: theme.orbit.colorIconSuccess,
    [ICON_COLORS.WARNING]: theme.orbit.colorIconWarning,
    [ICON_COLORS.CRITICAL]: theme.orbit.colorIconCritical,
  };
  return tokens[color];
};

const StyledIcon = styled(({ className, viewBox, dataTest, children }) => (
  <svg
    className={className}
    viewBox={viewBox}
    data-test={dataTest}
    preserveAspectRatio="xMidYMid meet"
  >
    {children}
  </svg>
))`
  width: ${getSize()};
  height: ${getSize()};
  vertical-align: middle;
  fill: currentColor;
  color: ${({ color, customColor }) => customColor || (color && getColor())};
`;

StyledIcon.defaultProps = {
  theme: defaultTokens,
};

const OrbitIcon = (props: Props) => {
  const { size, color, customColor, className, children, viewBox, dataTest } = props;

  return (
    <StyledIcon
      viewBox={viewBox}
      size={size}
      className={className}
      dataTest={dataTest}
      customColor={customColor}
      color={color}
    >
      {children}
    </StyledIcon>
  );
};

OrbitIcon.defaultProps = {
  size: "medium",
};

export default OrbitIcon;
