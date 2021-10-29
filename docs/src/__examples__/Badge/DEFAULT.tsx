import React from "react";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Badge>Tip</Badge>
    </Stack>
  ),
  exampleKnobs: [
    {
      component: "Badge",
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
