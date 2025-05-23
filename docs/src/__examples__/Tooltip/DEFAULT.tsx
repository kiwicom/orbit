import React from "react";
import { Button, OrbitProvider, Text, Tooltip, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Tooltip content={<Text>Select a flight before continuing.</Text>}>
        <Button asComponent="div">Book</Button>
      </Tooltip>
    </OrbitProvider>
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
