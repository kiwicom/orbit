import * as React from "react";
import { Alert } from "@kiwicom/orbit-components/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Badge type="warning" icon={<Alert ariaLabel="Warning" />}>
        Not yet confirmed
      </Badge>
      <Badge type="warningInverted" icon={<Alert ariaLabel="Warning" />}>
        Not yet confirmed
      </Badge>
    </Stack>
  ),
};
