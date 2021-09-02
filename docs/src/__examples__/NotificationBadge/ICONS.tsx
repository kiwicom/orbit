import React from "react";
import { NotificationBadge, Stack } from "@kiwicom/orbit-components";
import { Train } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
      <NotificationBadge ariaLabel="Train" type="info" icon={<Train />}>
        Train
      </NotificationBadge>
      <NotificationBadge ariaLabel="Train" type="info" icon={<Train />} />
    </Stack>
  ),
  info: {
    title: "Icons",
    description:
      "If you include an icon, it will override the content. Notification badges with icons look the same with and without content (the content doesn't work as accessible text).",
  },
};
