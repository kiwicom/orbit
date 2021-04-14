import * as React from "react";
import { AlertCircle } from "@kiwicom/orbit-components/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Badge type="critical" icon={<AlertCircle ariaLabel="Critical alert" />}>
        No connection to internet
      </Badge>
      <Badge type="criticalInverted" icon={<AlertCircle ariaLabel="Critical alert" />}>
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
