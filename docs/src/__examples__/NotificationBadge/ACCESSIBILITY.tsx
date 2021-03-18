import * as React from "react";
import * as Icons from "@kiwicom/orbit-components/icons";
import { NotificationBadge } from "@kiwicom/orbit-components";

export default {
  Example: () => <NotificationBadge ariaLabel="Train" icon={<Icons.Train />} />,
  info: {
    title: "Accessibility",
    description:
      "When using icons in notification badges, use <code>aria-label</code> to provide the same information to people who won't see the icons.",
  },
};
