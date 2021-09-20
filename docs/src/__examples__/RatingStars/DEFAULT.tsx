import React from "react";
import { RatingStars } from "@kiwicom/orbit-components";

export default {
  Example: () => <RatingStars rating={4} />,
  exampleKnobs: [
    {
      component: "RatingStars",
      knobs: [
        {
          name: "color",
          type: "select",
          options: ["primary", "secondary"],
          defaultValue: "primary",
        },
        {
          name: "size",
          type: "select",
          options: ["small", "medium", "large"],
          defaultValue: "small",
        },
        {
          name: "rating",
          type: "number",
          defaultValue: "",
        },
        {
          name: "showEmpty",
          type: "boolean",
          defaultValue: false,
        },
      ],
    },
  ],
};
