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
          type: "select",
          defaultValue: "2",
          options: ["0", "1", "2", "3"],
        },
      ],
    },
  ],
};
