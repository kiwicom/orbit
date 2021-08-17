import React from "react";
import { Button } from "@kiwicom/orbit-components";

export default {
  Example: () => <Button>Click me</Button>,
  knobs: [
    {
      name: "circled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "loading",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "size",
      type: "select",
      defaultValue: "normal",
      options: ["small", "normal", "large"],
    },
    {
      name: "type",
      type: "select",
      defaultValue: "primary",
      options: ["primary", "secondary", "critical", "primarySubtle", "criticalSubtle", "white"],
    },
  ],
};
