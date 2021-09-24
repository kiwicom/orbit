import React from "react";
import { Tag } from "@kiwicom/orbit-components";

export default {
  Example: () => <Tag>Bags</Tag>,
  exampleKnobs: [
    {
      component: "Tag",
      knobs: [
        { name: "selected", type: "boolean", defaultValue: false },
        { name: "size", type: "select", options: ["small", "normal"], defaultValue: "normal" },
      ],
    },
  ],
};
