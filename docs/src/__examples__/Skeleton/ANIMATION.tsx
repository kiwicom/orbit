import React from "react";
import { Skeleton } from "@kiwicom/orbit-components";

export default {
  Example: () => <Skeleton animationInterval={0.5} animationDuration={3} />,
  exampleKnobs: [
    {
      component: "Skeleton",
      knobs: [
        {
          name: "animationInterval",
          type: "number",
          defaultValue: 0.5,
        },
        {
          name: "animationDuration",
          type: "number",
          defaultValue: 3,
        },
      ],
    },
  ],
};
