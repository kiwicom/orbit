import * as React from "react";
import * as Icons from "@kiwicom/orbit-components/lib/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Badge>Tip</Badge>
      <Badge ariaLabel="Train" icon={<Icons.Train />} />
      <Badge ariaLabel="4 passengers" icon={<Icons.Passengers />}>
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
