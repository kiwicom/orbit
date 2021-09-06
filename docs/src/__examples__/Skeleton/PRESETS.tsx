import React from "react";
import { Skeleton } from "@kiwicom/orbit-components";

export default {
  Example: () => <Skeleton preset="List" />,
  exampleKnobs: [
    {
      component: "Skeleton",
      knobs: [
        {
          name: "preset",
          type: "select",
          options: ["List", "Text", "Card", "Button", "Image"],
          defaultValue: "List",
        },
      ],
    },
  ],
};
