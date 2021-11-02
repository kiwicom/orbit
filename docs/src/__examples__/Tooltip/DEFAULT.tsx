import React from "react";
import { Button, Text, Tooltip } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Tooltip content={<Text>Select a flight before continuing.</Text>}>
      <Button>Book</Button>
    </Tooltip>
  ),
  exampleKnobs: [
    {
      component: "Tooltip",
      knobs: [
        { name: "block", type: "boolean", defaultValue: false },
        { name: "removeUnderlinedText", type: "boolean", defaultValue: false },
        { name: "enabled", type: "boolean", defaultValue: true },
        {
          name: "placement",
          type: "select",
          options: [
            "auto",
            "auto-start",
            "auto-end",
            "top",
            "top-start",
            "top-end",
            "bottom",
            "bottom-start",
            "bottom-end",
            "right",
            "right-start",
            "right-end",
            "left",
            "left-start",
            "left-end",
          ],
          defaultValue: "bottom",
        },
        {
          name: "size",
          type: "select",
          options: ["small", "medium"],
          defaultValue: "small",
        },
      ],
    },
  ],
};
