import React from "react";
import { Skeleton } from "@kiwicom/orbit-components";

const PRESETS = ["List", "Text", "Card", "Button", "Image"];

export default {
  Example: () => <Skeleton preset="List" />,
  exampleKnobs: [
    {
      component: "Skeleton",
      knobs: [
        {
          name: "preset",
          type: "select",
          options: PRESETS,
          defaultValue: "List",
        },
      ],
    },
  ],
};
