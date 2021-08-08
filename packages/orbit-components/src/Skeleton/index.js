// @flow
import * as React from "react";

import Svg from "./Svg";

import type { Props } from ".";

const Skeleton = (props: Props): React.Node => {
  return <Svg {...props} />;
};

export default Skeleton;
