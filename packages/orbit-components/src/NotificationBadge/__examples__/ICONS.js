// @flow
import * as React from "react";

import NotificationBadge from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Stack>
      <NotificationBadge ariaLabel="Train" icon={<Icons.Train />}>
        Train
      </NotificationBadge>
      <NotificationBadge ariaLabel="Train" icon={<Icons.Train />} />
    </Stack>
  ),
  info: {
    title: "Icons",
    description:
      "If you include an icon, it will override the content. Notification badges with icons look the same with and without content (the content doesn't work as accessible text).",
  },
};
