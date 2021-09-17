import React from "react";
import { Textarea } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Textarea
      label="Your feedback"
      placeholder="What I liked about booking with Kiwi.com was ..."
    />
  ),
  exampleKnobs: [
    {
      component: "Textarea",
      knobs: [
        {
          name: "disabled",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "required",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "fullHeight",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "maxLength",
          type: "number",
          defaultValue: "",
        },
        {
          name: "label",
          type: "text",
          defaultValue: "Your feedback",
        },
        {
          name: "placeholder",
          type: "text",
          defaultValue: "",
        },
        {
          name: "placeholder",
          type: "text",
          defaultValue: "What I liked about booking with Kiwi.com was ...",
        },
        {
          name: "help",
          type: "text",
          defaultValue: "",
        },
        {
          name: "error",
          type: "text",
          defaultValue: "",
        },
        {
          name: "resize",
          type: "select",
          options: ["none", "vertical"],
          defaultValue: "none",
        },
        {
          name: "size",
          type: "select",
          options: ["small", "normal"],
          defaultValue: "normal",
        },
      ],
    },
  ],
};
