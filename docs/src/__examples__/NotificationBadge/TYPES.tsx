import React from "react";
import { NotificationBadge, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <NotificationBadge type="critical">3</NotificationBadge>
        <NotificationBadge type="criticalInverted">3</NotificationBadge>
      </Stack>
      <Stack flex>
        <NotificationBadge type="info">3</NotificationBadge>
        <NotificationBadge type="infoInverted">3</NotificationBadge>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Types",
    description:
      "Notification badges have two basic types. Use critical badges when user action is required and info badges when it's not required.",
  },
};
