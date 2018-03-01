// @flow
import * as React from "react";
import { colors } from "../constants";

const sizes = {
  normal: "20px",
  small: "20px",
  large: "26px",
};

const fillColors = {
  primary: colors.white,
  secondary: colors.shuttle,
};

type Props = {
  size: $Keys<typeof sizes>,
  type: $Keys<typeof fillColors>,
  icon: React.StatelessFunctionalComponent<*>,
};

const IconWrapper = (props: Props) => {
  const { icon: Icon, type, size } = props;

  return (
    <span>
      <Icon fill={fillColors[type]} height={sizes[size]} />
      <style xml>{`
        svg {
          position: absolute;
          top: 50%;
          left: 12px;
          transform: translateY(-50%);
        }
      `}</style>
    </span>
  );
};

export default IconWrapper;
