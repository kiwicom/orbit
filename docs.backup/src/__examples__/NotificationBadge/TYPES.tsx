import React from "react";
import { NotificationBadge, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <NotificationBadge type="critical">3</NotificationBadge>
        <NotificationBadge type="criticalSubtle">3</NotificationBadge>
      </Stack>
      <Stack flex>
        <NotificationBadge type="info">3</NotificationBadge>
        <NotificationBadge type="infoSubtle">3</NotificationBadge>
      </Stack>
    </Stack>
  ),
};
