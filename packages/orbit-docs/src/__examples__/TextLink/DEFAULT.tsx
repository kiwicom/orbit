import React from "react";
import { TextLink } from "@kiwicom/orbit-components";

export default {
  Example: () => <TextLink href="https://orbit.kiwi">Orbit design system</TextLink>,
  exampleKnobs: [
    {
      component: "TextLink",
      knobs: [
        {
          name: "type",
          type: "select",
          defaultValue: "primary",
          options: ["primary", "secondary", "info", "success", "warning", "critical", "white"],
        },
        {
          name: "size",
          type: "select",
          defaultValue: "normal",
          options: ["small", "normal", "large"],
        },
        {
          name: "noUnderline",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "standAlone",
          type: "boolean",
          defaultValue: false,
        },
        { name: "iconLeft", type: "icon", defaultValue: "" },
        { name: "iconRight", type: "icon", defaultValue: "" },
      ],
    },
  ],
};
