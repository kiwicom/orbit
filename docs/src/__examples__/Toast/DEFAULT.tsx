import React from "react";
import { Toast } from "@kiwicom/orbit-components";

export default {
  Example: () => <Toast>You’re signed in as john.doe@gmail.com.</Toast>,
  exampleKnobs: [
    {
      component: "Toast",
      knobs: [
        {
          name: "animate",
          type: "boolean",
          defaultValue: true,
        },
        {
          name: "iconLeft",
          type: "icon",
          defaultValue: "",
        },
        {
          name: "offsetY",
          type: "text",
          defaultValue: "0",
        },
        {
          name: "offsetX",
          type: "text",
          defaultValue: "-50%",
        },
      ],
    },
  ],
};
