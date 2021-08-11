// @flow
import * as React from "react";

import List from "./presets/List";
import Image from "./presets/Image";
import Card from "./presets/Card";
import Button from "./presets/Button";
import Text from "./presets/Text";
import Svg from "./Svg";

import type { Props } from ".";

const Skeleton = ({ preset, ...props }: Props): React.Node => {
  if (preset === "List") return <List {...props} />;
  if (preset === "Image") return <Image {...props} />;
  if (preset === "Card") return <Card {...props} />;
  if (preset === "Button") return <Button {...props} />;
  if (preset === "Text") return <Text {...props} />;

  return <Svg {...props} />;
};

export default Skeleton;
