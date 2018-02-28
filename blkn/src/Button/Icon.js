// @flow
import * as React from "react";
import * as constants from "../constants";

type Props = {
  size: "normal" | "small" | "large",
  type: "primary" | "secondary",
  icon: Function,
};

const Icon = (props: Props) => {
  const { icon, type, size } = props;
  return (
    <span>
      <icon
        fill={constants.iconColors[type]}
        height={constants.iconSizes[size]}
        width={constants.iconSizes[size]}
      />
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

export default Icon;
