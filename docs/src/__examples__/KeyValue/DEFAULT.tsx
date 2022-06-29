import React from "react";
import { KeyValue } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    return <KeyValue label="Label" value="Value" />;
  },
  exampleKnobs: [
    {
      component: "KeyValue",
      knobs: [
        {
          name: "label",
          type: "text",
          defaultValue: "Label",
        },
        {
          name: "value",
          type: "text",
          defaultValue: "Value",
        },
        {
          name: "size",
          type: "select",
          options: ["normal", "large"],
          defaultValue: "normal",
        },
      ],
    },
  ],
};
