import * as React from "react";
import { Passengers } from "@kiwicom/orbit-components/icons";
import { Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Badge ariaLabel="4 passengers" icon={<Passengers />}>
      4
    </Badge>
  ),
  info: {
    title: "Badge accessibility",
    description:
      "To make sure their meaning is clear to everyone, badges can have an aria-label to help people who can't see their visual cues.",
  },
};
