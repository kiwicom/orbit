import * as React from "react";

import type { Props } from "../types";
import Svg from "../Svg";

const Card = ({ height = 98, rowHeight = 98, ...props }: Props) => {
  return (
    <Svg
      {...props}
      rows={1}
      height={height}
      rowBorderRadius={12}
      rowHeight={rowHeight}
      rowOffset={0}
    />
  );
};

export default Card;
