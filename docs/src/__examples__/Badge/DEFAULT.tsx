import React from "react";
import { Passengers, Train } from "@kiwicom/orbit-components/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Badge>Tip</Badge>
      <Badge ariaLabel="Train" icon={<Train />} />
      <Badge ariaLabel="4 passengers" icon={<Passengers />}>
        4
      </Badge>
    </Stack>
  ),
  knobs: [
    { name: "icon", type: "icon", defaultValue: "" },
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
};
