import * as React from "react";
import { NotificationBadge } from "@kiwicom/orbit-components";

export default {
  Example: () => <NotificationBadge type="criticalInverted">3</NotificationBadge>,
  info: {
    title: "Default notification badges",
    description:
      "Notification badges should be only an icon or a 2-digit number. For notifications, use critical inverted badges unless you have a specific reason not to.",
  },
};
