// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Badge from "./BadgePrimitive";

const getIcons = defaultIcon => select("Icon", [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("Primitives", module).add(
  "Badge",
  () => {
    const Icon = getIcon(getIcons("Airplane"));
    const background = text("Background", "linear-gradient(red, yellow, green)");
    const foregroundColor = text("ForegroundColor", "Blue");

    return (
      <Badge
        background={background}
        foregroundColor={foregroundColor}
        type="info"
        icon={Icon && <Icon />}
      >
        Badge
      </Badge>
    );
  },
  {
    info: "This is a preview of this component in RTL setup.",
  },
);
