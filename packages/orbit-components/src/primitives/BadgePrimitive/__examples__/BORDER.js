// @flow
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import BadgePrimitive from "../index";

export default {
  Example: () => (
    <BadgePrimitive
      background={defaultTheme.orbit.backgroundBody}
      foregroundColor={defaultTheme.orbit.colorTextPrimary}
      borderColor={defaultTheme.orbit.paletteProductNormal}
    >
      Orbit
    </BadgePrimitive>
  ),
  info: {
    title: "Border",
    description: "You can set the color of the border, which is always 1 px and solid.",
  },
};
