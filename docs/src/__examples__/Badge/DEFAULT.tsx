import * as React from "react";
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
  info: {
    title: "Default badges",
    description:
      "Badges should present simple and short static information. They can be just text, just an icon, or an icon and text.",
  },
};
