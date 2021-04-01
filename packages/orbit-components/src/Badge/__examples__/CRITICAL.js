// @flow
import * as React from "react";

import Badge from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <Badge type="critical" icon={<Icons.AlertCircle ariaLabel="Critical alert" />}>
        No connection to internet
      </Badge>
      <Badge type="criticalInverted" icon={<Icons.AlertCircle ariaLabel="Critical alert" />}>
        No connection to internet
      </Badge>
    </Stack>
  ),
  info: {
    title: "Critical badges",
    description:
      "Critical badges call attention to problems that require immediate attention from the user. These badges create feelings of stress so only use them for issues where they’re truly necessary.",
  },
};
