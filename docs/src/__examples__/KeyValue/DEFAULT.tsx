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
        {
          name: "spacing",
          type: "select",
          defaultValue: "medium",
          options: [
            "none",
            "XXXSmall",
            "XXSmall",
            "XSmall",
            "small",
            "medium",
            "large",
            "XLarge",
            "XXLarge",
          ],
        },
        {
          name: "direction",
          type: "select",
          defaultValue: "row",
          options: ["row", "column"],
        },
      ],
    },
  ],
};
