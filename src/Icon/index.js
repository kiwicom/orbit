// @flow
import * as React from "react";
import Icon from "react-icon-base";
import * as tokens from "orbit-design-token";

export const iconSizes = {
  small: tokens.widthIconSmall,
  medium: tokens.widthIconMedium,
};

export const iconColors = {
  primary: "#46515e", // tokens.colorIconPrimary,
  secondary: "#7f91a8", // tokens.colorIconSecondary,
  attention: "#171b1e", // tokens.colorIconAttention,
  terciary: "#bac7d5", // tokens.colorIconTerciary,
};

type Props = {
  size: $Keys<typeof iconSizes> | string,
  color: $Keys<typeof iconColors> | string,
  children: React.Node,
  viewBox: string,
  style: { any: any },
};

const OrbitIcon = (props: Props) => {
  const { size, color, children, viewBox, style } = props;
  return (
    <Icon
      viewBox={viewBox}
      size={iconSizes[size] || size}
      color={iconColors[color] || color}
      style={style}
    >
      {children}
    </Icon>
  );
};

OrbitIcon.defaultProps = {
  size: "medium",
  color: "#000",
};

export default OrbitIcon;
