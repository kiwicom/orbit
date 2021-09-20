import React from "react";
import IllustrationPrimitive from "@kiwicom/orbit-components/lib/primitives/IllustrationPrimitive";

export default {
  Example: () => <IllustrationPrimitive name="Accommodation" />,
  exampleKnobs: [
    {
      component: "IllustrationPrimitive",
      knobs: [
        {
          name: "name",
          type: "string",
          defaultValue: "",
        },
        {
          name: "size",
          type: "select",
          defaultValue: "medium",
          options: ["extraSmall", "small", "medium", "large", "display"],
        },
      ],
    },
  ],
};
