// @flow
import * as React from "react";

import NotificationBadge from "../index";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => <NotificationBadge ariaLabel="Train" icon={<Icons.Train />} />,
  info: {
    title: "Accessibility",
    description:
      "When using icons in notification badges, use <code>aria-label</code> to provide the same information to people who won't see the icons.",
  },
};
