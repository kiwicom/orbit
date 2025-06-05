import React from "react";
import { Airplane } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => <Airplane ariaLabel="Airplane" />,
  exampleKnobs: [
    {
      component: "Airplane",
      knobs: [
        {
          name: "size",
          type: "select",
          options: ["small", "medium", "large"],
          defaultValue: "medium",
        },
        {
          name: "customColor",
          type: "text",
          defaultValue: "",
        },
        {
          name: "color",
          type: "select",
          options: ["primary", "secondary", "tertiary", "info", "success", "warning", "critical"],
          defaultValue: "primary",
        },
      ],
    },
  ],
};
