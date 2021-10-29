import React from "react";
import { ListChoice } from "@kiwicom/orbit-components";

export default {
  Example: () => <ListChoice title="Oslo, Norway" />,

  exampleKnobs: [
    {
      component: "ListChoice",
      knobs: [
        { name: "title", type: "text", defaultValue: "Oslo, Norway" },
        { name: "description", type: "text", defaultValue: "" },
        { name: "disabled", type: "boolean", defaultValue: false },
        { name: "icon", type: "icon", defaultValue: "" },
        { name: "selectable", type: "boolean", defaultValue: false },
        { name: "selected", type: "boolean", defaultValue: false },
      ],
    },
  ],
};
