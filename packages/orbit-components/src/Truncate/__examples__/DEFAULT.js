// @flow
import * as React from "react";

import Truncate from "../index";

export default {
  Example: (): React.Node => (
    <Truncate>
      When you&apos;re using progressive disclosure, you might have text that you&apos;ve decided is
      too long to display all at once. You don&apos;t want to overwhelm your users, so you want to
      keep it hidden but accessible. Use a Truncate component to make sure your text fits within its
      parent and doesn&apos;t take over your designs.
    </Truncate>
  ),
  info: {
    title: "Default truncate",
    description:
      "By default, truncate components will limit their children to 100% of the parent width.",
  },
};
