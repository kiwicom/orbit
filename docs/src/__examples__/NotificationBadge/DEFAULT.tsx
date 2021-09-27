import React from "react";
import { NotificationBadge } from "@kiwicom/orbit-components";

export default {
  Example: () => <NotificationBadge type="info">3</NotificationBadge>,
  exampleKnobs: [
    {
      component: "NotificationBadge",
      knobs: [
        { name: "icon", type: "icon", defaultValue: null },
        {
          name: "type",
          type: "select",
          defaultValue: "",
          options: [
            "neutral",
            "dark",
            "info",
            "success",
            "critical",
            "warning",
            "infoInverted",
            "criticalInverted",
            "successInverted",
            "warningInverted",
          ],
        },
      ],
    },
  ],
};
