import * as React from "react";
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive";
import { Stack } from "@kiwicom/orbit-components";
import defaultTheme from "@kiwicom/orbit-components/lib/defaultTheme";
import { AirplaneTakeoff } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="column">
      <BadgePrimitive
        icon={<AirplaneTakeoff />}
        background="linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)"
        foregroundColor={defaultTheme.orbit.colorTextWhite}
      >
        Orbit
      </BadgePrimitive>
    </Stack>
  ),
  knobs: [
    {
      name: "icon",
      type: "icon",
      defaultValue: "",
    },
    {
      name: "background",
      type: "text",
      defaultValue: "linear-gradient(264.15deg, #FC8D3E 0%, #F16E5B 100%)",
    },
    {
      name: "foregroundColor",
      type: "text",
      defaultValue: "#fff",
    },
  ],
};
