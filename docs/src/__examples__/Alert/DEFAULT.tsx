import React from "react";
import { Alert } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Alert icon title="You've got mail!">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      Visit <a href="#">your inbox</a>.
    </Alert>
  ),
  exampleKnobs: [
    {
      component: "Alert",
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
          name: "suppressed",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "icon",
          type: "icon",
          defaultValue: "",
        },
        {
          name: "title",
          type: "text",
          defaultValue: "You've got mail",
        },
      ],
    },
  ],
};
