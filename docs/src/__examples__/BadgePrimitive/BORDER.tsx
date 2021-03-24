import * as React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive";

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
