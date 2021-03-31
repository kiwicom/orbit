// @flow
import * as React from "react";

import Desktop from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: (): React.Node => (
    <Stack>
      <Text>This text appears all of the time. Resize to change other text.</Text>
      <Desktop>
        <Text>This text only appears on larger screens.</Text>
      </Desktop>
    </Stack>
  ),
  info: {
    title: "Default desktop",
    description: "Desktop components hide their children on small screens (tablet and below).",
  },
};
