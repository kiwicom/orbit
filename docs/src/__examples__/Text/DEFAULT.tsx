import React from "react";
import { Text } from "@kiwicom/orbit-components";

export default {
  Example: () => <Text>Orbit is an open source design system for your next travel project.</Text>,
  exampleKnobs: [
    {
      component: "Text",
      knobs: [
        {
          name: "margin",
          type: "text",
          defaultValue: "",
        },
        {
          name: "as",
          type: "select",
          options: ["p", "span", "div"],
          defaultValue: "p",
        },
        {
          name: "type",
          type: "select",
          options: ["primary", "secondary", "info", "success", "warning", "critical", "white"],
          defaultValue: "primary",
        },
        {
          name: "size",
          type: "select",
          options: ["small", "normal", "large"],
          defaultValue: "normal",
        },
        {
          name: "align",
          type: "select",
          options: ["left", "center", "right", "justify"],
          defaultValue: "left",
        },
        {
          name: "strikeThrough",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "withBackground",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "uppercase",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "weight",
          type: "select",
          options: ["normal", "bold"],
          defaultValue: "normal",
        },
      ],
    },
  ],
};
