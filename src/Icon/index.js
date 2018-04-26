// @flow
import * as React from "react";
import Icon from "react-icon-base";
import * as tokens from "@kiwicom/orbit-design-tokens";

export const iconSizes = {
  small: tokens.widthIconSmall,
  medium: tokens.widthIconMedium,
  large: tokens.widthIconLarge,
};

export const iconColors = {
  attention: tokens.colorIconAttention,
  primary: tokens.colorIconPrimary,
  secondary: tokens.colorIconSecondary,
  terciary: tokens.colorIconTerciary,
};

type Props = {
  size: $Keys<typeof iconSizes>,
  color: $Keys<typeof iconColors>,
  customColor: string,
  children: React.Node,
  viewBox: string,
};

const OrbitIcon = (props: Props) => {
  const { size, color, customColor, children, viewBox } = props;
  return (
    <Icon
      viewBox={viewBox}
      size={iconSizes[size]}
      color={customColor || iconColors[color] || "#000000"}
    >
      {children}
    </Icon>
  );
};

OrbitIcon.defaultProps = {
  size: "medium",
  color: "primary",
};

export default OrbitIcon;
