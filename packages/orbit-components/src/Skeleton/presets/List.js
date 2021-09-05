// @flow
import * as React from "react";

import type { Props } from "..";
import Svg from "../Svg";

const List = ({ height = 80, ...props }: Props): React.Node => {
  return (
    <Svg {...props} height={height}>
      <rect x="35" y="0" width="100%" height="20" />
      <rect x="35" y="30" width="100%" height="20" />
      <rect x="35" y="60" width="100%" height="20" />
      <rect x="3" y="0" rx="4" ry="4" width="20" height="20" />
      <rect x="3" y="30" rx="4" ry="4" width="20" height="20" />
      <rect x="3" y="60" rx="4" ry="4" width="20" height="20" />
    </Svg>
  );
};

export default List;
