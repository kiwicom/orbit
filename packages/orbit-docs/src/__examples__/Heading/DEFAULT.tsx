import React from "react";
import { Heading } from "@kiwicom/orbit-components";

export default {
  Example: () => <Heading>Orbit components</Heading>,
  exampleKnobs: [
    {
      component: "Heading",
      knobs: [
        {
          name: "as",
          type: "select",
          options: ["h1", "h2", "h3", "h4", "h5", "h6", "div"],
          defaultValue: "div",
        },
        {
          name: "type",
          type: "select",
          options: ["display", "displaySubtitle", "title1", "title2", "title3", "title4", "title5"],
          defaultValue: "div",
        },
      ],
    },
  ],
};
