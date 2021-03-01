import * as React from "react";
import * as Icons from "@kiwicom/orbit-components/lib/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Badge type="warning" icon={<Icons.Alert ariaLabel="Warning" />}>
        Not yet confirmed
      </Badge>
      <Badge type="warningInverted" icon={<Icons.Alert ariaLabel="Warning" />}>
        Not yet confirmed
      </Badge>
    </Stack>
  ),
  info: {
    title: "Warning badges",
    description:
      "Warning badges highlight information that might have a negative impact on the user but isn’t critical. They are associated with negative emotions so only use them occasionally to stop potential problems before they happen.",
  },
};
