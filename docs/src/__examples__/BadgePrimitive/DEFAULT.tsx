import * as React from "react";
import BadgePrimitive from "@kiwicom/orbit-components/lib/primitives/BadgePrimitive";
import { Stack } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack direction="column">
      <BadgePrimitive>Tip</BadgePrimitive>
      <BadgePrimitive ariaLabel="Train" icon={<Icons.Train />} />
      <BadgePrimitive ariaLabel="4 passengers" icon={<Icons.Passengers />}>
        4
      </BadgePrimitive>
    </Stack>
  ),
  info: {
    title: "Default badge primitives",
    description: "By default, badge primitives have padding with no background and ink text.",
  },
};
