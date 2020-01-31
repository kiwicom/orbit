// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import BadgePrimitive from "./BadgePrimitive";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Primitives", module).add(
  "BadgePrimitive",
  () => {
    const Icon = getIcon(getIcons("Airplane"));
    const background = text("Background", "linear-gradient(#fd1d1d, #ffae28)");
    const foregroundColor = text("ForegroundColor", "#fff");

    return (
      <BadgePrimitive
        background={background}
        foregroundColor={foregroundColor}
        icon={Icon && <Icon />}
      >
        BadgePrimitive
      </BadgePrimitive>
    );
  },
  {
    info: "This is a preview of this component in RTL setup.",
  },
);
