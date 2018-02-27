// @flow
import * as React from "react";

type Props = {
  size: "normal" | "small" | "large",
  secondary: string,
  icon: Function,
};

const sizes = {
  normal: "20px",
  small: "20px",
  large: "26px",
};
const Icon = (props: Props) => {
  return (
    <span>
      <props.icon
        fill={props.secondary ? "#46515e" : "white"}
        height={sizes[props.size]}
        width={sizes[props.size]}
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
