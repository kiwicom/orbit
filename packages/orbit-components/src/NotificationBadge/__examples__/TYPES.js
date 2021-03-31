// @flow
import * as React from "react";

import NotificationBadge from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <Stack flex>
        <NotificationBadge type="critical">3</NotificationBadge>
        <NotificationBadge type="criticalInverted">3</NotificationBadge>
      </Stack>
      <Stack flex>
        <NotificationBadge type="info">3</NotificationBadge>
        <NotificationBadge type="infoInverted">3</NotificationBadge>
      </Stack>
      <Stack flex>
        <NotificationBadge type="neutral">3</NotificationBadge>
        <NotificationBadge type="dark">3</NotificationBadge>
      </Stack>
      <Stack flex>
        <NotificationBadge type="success">3</NotificationBadge>
        <NotificationBadge type="warning">3</NotificationBadge>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Types",
    description:
      "Notification badges have various types for different situations. For notifications, use critical inverted unless you have a specific reason not to.",
  },
};
