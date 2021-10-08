// @flow
import * as React from "react";

import Mobile from "../index";
import Text from "../../Text";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack>
      <Text>This text appears all of the time. Resize to change other text.</Text>
      <Mobile>
        <Text>This text only appears on smaller screens.</Text>
      </Mobile>
    </Stack>
  ),
  info: {
    title: "Default mobile",
    description: "Mobile components hide their children on wide screens (desktop and above).",
  },
};
