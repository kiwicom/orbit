import React from "react";
import { StopoverArrow } from "@kiwicom/orbit-components";

export default {
  Example: () => <StopoverArrow stops="2" />,
  exampleKnobs: [
    {
      component: "StopoverArrow",
      knobs: [
        {
          name: "stops",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};
