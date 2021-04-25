// @flow
import * as React from "react";

import BadgePrimitive from "../index";
import Stack from "../../../Stack";
import * as Icons from "../../../icons";

export default {
  Example: (): React.Node => (
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
