// @flow
import * as React from "react";

type Props = {
  size: "normal" | "small" | "large",
  type: "primary" | "secondary",
  icon: Function,
};

const fills = {
  primary: "#46515e",
  secondary: "white",
};
const sizes = {
  normal: "20px",
  small: "20px",
  large: "26px",
};
const Icon = (props: Props) => {
  const { icon, type } = props;
  return (
    <span>
      <icon fill={fills[type]} height={sizes[props.size]} width={sizes[props.size]} />
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
