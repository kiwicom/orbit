// @flow
import * as React from "react";
import Icon from "react-icon-base";

import { ICON_SIZES, ICON_COLORS } from "./consts";

import type { Props } from "./index";

const OrbitIcon = (props: Props) => {
  const { size, color, customColor, className, children, viewBox } = props;

  return (
    <Icon
      viewBox={viewBox}
      size={ICON_SIZES[size]}
      className={className}
      color={customColor || (color && ICON_COLORS[color])}
    >
      {children}
    </Icon>
  );
};

OrbitIcon.defaultProps = {
  size: "medium",
};

export default OrbitIcon;
