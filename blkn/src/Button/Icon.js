// @flow
import * as React from "react";

type Props = {
  size: string,
  secondary: string,
  icon: Function,
};

const Icon = (props: Props) => {
  return (
    <span>
      <props.icon
        fill={props.secondary ? "#46515e" : "white"}
        height={props.size === "normal" ? "20px" : props.size === "small" ? "20px" : "26px"}
        width={props.size === "normal" ? "20px" : props.size === "small" ? "20px" : "26px"}
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
