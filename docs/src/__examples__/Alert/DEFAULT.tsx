import React from "react";
import { Alert } from "@kiwicom/orbit-components";

export default {
  Example: () => <Alert icon title="You've got mail" />,
  knobs: [
    {
      name: "type",
      type: "select",
      defaultValue: "info",
      options: ["info", "success", "warning", "critical"],
    },
    {
      name: "closable",
      type: "boolean",
      defaultValue: false,
    },
    {
      name: "icon",
      type: "icon",
      defaultValue: "",
    },
    {
      name: "spaceAfter",
      type: "select",
      defaultValue: "none",
      options: ["none", "smallest", "small", "normal", "medium", "large", "largest"],
    },
  ],
};
