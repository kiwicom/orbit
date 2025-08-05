import * as React from "react";

import type { Props } from "../types";
import Svg from "../Svg";

const Text = ({ height = 110, ...props }: Props) => {
  return (
    <Svg {...props} height={height}>
      <rect x="0" y="0" rx="4" ry="4" width="40%" height="21px" />
      <rect x="0" y="29px" rx="4" ry="4" width="100%" height="21px" />
      <rect x="0" y="58px" rx="4" ry="4" width="100%" height="21px" />
      <rect x="0" y="87px" rx="4" ry="4" width="100%" height="21px" />
    </Svg>
  );
};

export default Text;
