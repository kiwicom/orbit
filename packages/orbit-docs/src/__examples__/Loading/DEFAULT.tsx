import React from "react";
import { Loading } from "@kiwicom/orbit-components";

export default {
  Example: () => <Loading type="pageLoader" />,
  exampleKnobs: [
    {
      component: "Loading",
      knobs: [
        {
          name: "type",
          type: "select",
          defaultValue: "pageLoader",
          options: ["buttonLoader", "searchLoader", "boxLoader", "pageLoader", "inlineLoader"],
        },
        {
          name: "text",
          type: "text",
          defaultValue: "",
        },
      ],
    },
  ],
};
