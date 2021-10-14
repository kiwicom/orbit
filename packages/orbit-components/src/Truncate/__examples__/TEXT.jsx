// @flow
import * as React from "react";

import Text from "../../Text";
import Truncate from "../index";

export default {
  Example: (): React.Node => (
    <Truncate>
      <Text>
        When you&apos;re using progressive disclosure, you might have text that you&apos;ve decided
        is too long to display all at once. You don&apos;t want to overwhelm your users, so you want
        to keep it hidden but accessible. Use a Truncate component to make sure your text fits
        within its parent and doesn&apos;t take over your designs.
      </Text>
    </Truncate>
  ),
  info: {
    title: "With Text",
    description: "Truncate components also work with Text components as their children.",
  },
};
