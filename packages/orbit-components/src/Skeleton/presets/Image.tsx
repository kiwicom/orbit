import * as React from "react";

import { Props } from "../types";
import Svg from "../Svg";

const Image = ({ height = 150, width = 300, ...props }: Props) => {
  return (
    <Svg {...props} height={height} width={width}>
      <rect x="0" y="0" rx="6" ry="6" width="100%" height="100%" />
    </Svg>
  );
};

export default Image;
