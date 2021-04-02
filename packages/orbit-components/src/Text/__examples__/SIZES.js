// @flow
import * as React from "react";

import Text from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack flex align="end">
      <Text size="large">Large text</Text>
      <Text>Normal text</Text>
      <Text size="small">Small text</Text>
    </Stack>
  ),
  info: {
    title: "Text size",
    description:
      "Text components can come in three possible sizes (small, normal, and large). These sizes should give you a clear hierarchy for all your text.",
  },
};
