import React from "react";
import { FeatureIcon } from "@kiwicom/orbit-components";

export default {
  Example: () => <FeatureIcon name="TicketStandard" />,
  exampleKnobs: [
    {
      component: "FeatureIcon",
      knobs: [
        {
          name: "name",
          type: "select",
          options: ["TicketFlexi", "TicketSaver", "TicketStandard"],
          defaultValue: "TicketStandard",
        },
      ],
    },
  ],
};
