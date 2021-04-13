import * as React from "react";
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive";
import { Stack } from "@kiwicom/orbit-components";
import { Passengers, Train } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="column">
      <BadgePrimitive>Tip</BadgePrimitive>
      <BadgePrimitive ariaLabel="Train" icon={<Train />} />
      <BadgePrimitive ariaLabel="4 passengers" icon={<Passengers />}>
        4
      </BadgePrimitive>
    </Stack>
  ),
  info: {
    title: "Default badge primitives",
    description: "By default, badge primitives have padding with no background and ink text.",
  },
};
