import React from "react";
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive";
import { Stack } from "@kiwicom/orbit-components";
import { AirplaneTakeoff } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="column">
      <BadgePrimitive
        icon={<AirplaneTakeoff />}
        className="text-white-normal bg-gradient-to-r from-[#fd1d1d] to-[#ffae28]"
      >
        Orbit
      </BadgePrimitive>
    </Stack>
  ),
  exampleKnobs: [
    {
      component: "BadgePrimitive",
      knobs: [
        {
          name: "icon",
          type: "icon",
          defaultValue: "",
        },
        {
          name: "className",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};
