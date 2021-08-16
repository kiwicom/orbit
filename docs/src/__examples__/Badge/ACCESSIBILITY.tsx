import * as React from "react";
import { Passengers } from "@kiwicom/orbit-components/icons";
import { Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Badge ariaLabel="4 passengers" icon={<Passengers />}>
      4
    </Badge>
  ),
};
