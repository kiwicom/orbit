// @flow
import * as React from "react";

import Hide from "../index";
import Text from "../../Text";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack>
      <Text>This text appears all of the time. Resize to change other text.</Text>
      <Hide on={["largeMobile", "tablet"]}>
        <Text>
          This text appears on small and wide screens&mdash;not large mobile and table screens.
        </Text>
      </Hide>
    </Stack>
  ),
  info: {
    title: "Default hide",
    description:
      "Hide components hide their children on all screens listed in the <code>on</code> prop. By default, the display is <code>inline-block</code>.",
  },
};
