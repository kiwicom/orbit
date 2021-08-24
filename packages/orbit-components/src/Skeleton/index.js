// @flow
import * as React from "react";

import Svg from "./Svg";
import * as Presets from "./presets";

import type { Props } from ".";

const Skeleton = ({ preset, ...props }: Props): React.Node => {
  const Component = preset ? Presets[preset] : Svg;

  return <Component {...props} />;
};

export default Skeleton;
