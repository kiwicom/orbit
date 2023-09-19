import React from "react";
import { text, select } from "@storybook/addon-knobs";

import BadgePrimitiveComponent from "./primitives/BadgePrimitive";
import * as Icons from "../icons";

export default {
  title: "Tailwind",
};

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

export const BadgePrimitive = () => {
  const Icon = getIcon(getIcons("icon", "Airplane"));
  const className = text(
    "className",
    "bg-gradient-to-r from-[#fd1d1d] to-[#ffae28] text-white-normal",
  );

  return (
    <BadgePrimitiveComponent className={className} icon={Icon && <Icon />}>
      BadgePrimitive
    </BadgePrimitiveComponent>
  );
};

BadgePrimitive.story = {
  name: "BadgePrimitive",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
