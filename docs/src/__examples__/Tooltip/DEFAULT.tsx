import React from "react";
import { Button, Text, Tooltip } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Tooltip renderInPortal={false} content={<Text>Select a flight before continuing.</Text>}>
      <Button disabled>Book</Button>
    </Tooltip>
  ),
  exampleKnobs: [
    {
      component: "Tooltip",
      knobs: [
        { name: "stopPropagation", type: "boolean", defaultValue: false },
        { name: "lockScrolling", type: "boolean", defaultValue: true },
        { name: "renderInPortal", type: "boolean", defaultValue: false },
        { name: "block", type: "boolean", defaultValue: false },
        { name: "removeUnderlinedText", type: "boolean", defaultValue: false },
        { name: "enabled", type: "boolean", defaultValue: true },
        {
          name: "preferredAlign",
          type: "select",
          options: ["center", "start", "end"],
          defaultValue: "",
        },
        {
          name: "preferredPosition",
          type: "select",
          options: ["right", "left", "top", "bottom"],
          defaultValue: "",
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
