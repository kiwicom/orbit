// @flow
import * as React from "react";
import * as constants from "../constants";

type Props = {
  size: "normal" | "small" | "large",
  type: "primary" | "secondary",
  icon: Function,
};

export default (props: Props) => {
  const { icon: Icon, type } = props;

  return (
    <span>
      <Icon
        fill={constants.iconColors[type]}
        height={constants.iconSizes[props.size]}
        width={constants.iconSizes[props.size]}
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

// export default Icon;
