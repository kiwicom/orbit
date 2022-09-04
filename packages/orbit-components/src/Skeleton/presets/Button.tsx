// @flow
import * as React from "react";

import type { Props } from "..";
import Svg from "../Svg";

const Button = ({ height = 44, rowHeight = 44, width = 150, ...props }: Props): React.Node => {
  return (
    <Svg
      rows={1}
      height={height}
      width={width}
      rowHeight={rowHeight}
      rowBorderRadius={6}
      rowOffset={0}
      {...props}
    />
  );
};

export default Button;
