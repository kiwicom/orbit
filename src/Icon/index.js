// @flow
import * as React from "react";
import Icon from "react-icon-base";
import { defaultTokens as tokens } from "@kiwicom/orbit-design-tokens";

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
  color?: $Keys<typeof iconColors>,
  className: string,
  customColor: string,
  children: React.Node,
  viewBox: string,
};

const OrbitIcon = (props: Props) => {
  const { size, color, customColor, className, children, viewBox } = props;

  return (
    <Icon
      viewBox={viewBox}
      size={iconSizes[size]}
      className={className}
      color={customColor || (color && iconColors[color])}
    >
      {children}
    </Icon>
  );
};

OrbitIcon.defaultProps = {
  size: "medium",
};

export default OrbitIcon;
