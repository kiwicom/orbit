import React from "react";
import { BadgeList, BadgeListItem } from "@kiwicom/orbit-components";
import { CheckCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => {
    return (
      <BadgeList>
        <BadgeListItem icon={<CheckCircle />}>Transfer protected</BadgeListItem>
      </BadgeList>
    );
  },
  exampleKnobs: [
    {
      component: "BadgeListItem",
      knobs: [
        {
          name: "type",
          type: "select",
          defaultValue: "neutral",
          options: ["neutral", "info", "success", "warning", "critical"],
        },
      ],
    },
  ],
};
