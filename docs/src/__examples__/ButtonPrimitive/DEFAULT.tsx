import React from "react";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { AirplaneTakeoff } from "@kiwicom/orbit-components/icons";
import ButtonPrimitive from "@kiwicom/orbit-components/lib/primitives/ButtonPrimitive";

export default {
  Example: () => (
    <ButtonPrimitive
      background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
      foreground={defaultTheme.orbit.colorTextWhite}
      iconLeft={<AirplaneTakeoff />}
      padding={defaultTheme.orbit.paddingButtonNormal}
    >
      Click me
    </ButtonPrimitive>
  ),
  info: {
    title: "Default button primitive",
    description:
      "The default button primitive appears as a &lt;button&gt; with other traits inherited or as the browser default.",
  },
};
