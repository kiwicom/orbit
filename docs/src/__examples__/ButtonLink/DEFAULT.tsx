import React from "react";
import { ButtonLink } from "@kiwicom/orbit-components";

export default {
  Example: () => <ButtonLink>Click me</ButtonLink>,
  knobs: [
    { name: "iconLeft", type: "icon", defaultValue: "" },
    { name: "iconRight", type: "icon", defaultValue: "" },
    {
      name: "compact",
      type: "boolean",
      defaultValue: false,
    },
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
