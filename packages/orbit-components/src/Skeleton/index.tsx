import * as React from "react";

import Svg from "./Svg";
import * as Presets from "./presets";
import { Props } from "./index.d";

const Skeleton = ({ preset, ...props }: Props) => {
  const Component = preset ? Presets[preset] : Svg;

  return <Component {...props} />;
};

export default Skeleton;
