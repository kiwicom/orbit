import React from "react";
import { SocialButton } from "@kiwicom/orbit-components";

export default {
  Example: () => <SocialButton>Sign in with Apple </SocialButton>,
  exampleKnobs: [
    {
      component: "SocialButton",
      knobs: [
        {
          name: "type",
          type: "select",
          defaultValue: "apple",
          options: ["apple", "facebook", "X", "google"],
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
      ],
    },
  ],
};
