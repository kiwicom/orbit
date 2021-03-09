// @flow
import * as React from "react";

import BadgePrimitive from "../index";
import defaultTheme from "../../../defaultTheme";
import * as Icons from "../../../icons";

export default {
  Example: () => (
    <BadgePrimitive
      background={defaultTheme.orbit.backgroundBody}
      foregroundColor={defaultTheme.orbit.colorTextPrimary}
      ariaLabel="4 passengers"
      icon={<Icons.Passengers />}
    >
      4
    </BadgePrimitive>
  ),
  info: {
    title: "Badge primitive accessibility",
    description:
      "To make sure their meaning is clear to everyone, badge primitives can have an aria-label to help people who can't see their visual cues.",
  },
};
