import React from "react";
import { Skeleton } from "@kiwicom/orbit-components";

export default {
  Example: () => <Skeleton width={300} height={100} />,
  exampleKnobs: [
    {
      component: "Skeleton",
      knobs: [
        {
          name: "width",
          type: "number",
          defaultValue: 300,
        },
        {
          name: "height",
          type: "number",
          defaultValue: 100,
        },
      ],
    },
  ],
};
