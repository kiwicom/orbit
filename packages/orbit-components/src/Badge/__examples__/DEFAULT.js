// @flow
import * as React from "react";

import Badge from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
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
