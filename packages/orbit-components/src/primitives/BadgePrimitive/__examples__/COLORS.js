// @flow
import * as React from "react";

import defaultTheme from "../../../defaultTheme";
import BadgePrimitive from "../index";
import Stack from "../../../Stack";
import * as Icons from "../../../icons";

export default {
  Example: () => (
    <Stack flex>
      <BadgePrimitive
        icon={<Icons.AirplaneTakeoff />}
        background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
        foregroundColor={defaultTheme.orbit.colorTextWhite}
      >
        Orbit
      </BadgePrimitive>
      <BadgePrimitive
        icon={<Icons.AirplaneTakeoff />}
        background="url(https://images.kiwi.com/photos/60x60/paris_fr.jpg)"
        foregroundColor={defaultTheme.orbit.colorTextWhite}
      >
        Orbit
      </BadgePrimitive>
    </Stack>
  ),
  info: {
    title: "Colors",
    description:
      "You can set the background and foreground color. Backgrounds can be any CSS property, including gradients and images. For the forground, only colors are available and affect both text and icon.",
  },
};
