import * as React from "react";
import { NotificationBadge } from "@kiwicom/orbit-components";

export default {
  Example: () => <NotificationBadge type="info">3</NotificationBadge>,
  info: {
    title: "Default notification badges",
    description: "Notification badges should be only an icon or a number up to 2 digits.",
  },
};
