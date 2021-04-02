// @flow
import * as React from "react";

import Text from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack>
      <Text>Text aligned to the left</Text>
      <Text align="center">Text aligned in the center</Text>
      <Text align="right">Text aligned to the right</Text>
    </Stack>
  ),
  info: {
    title: "Text alignment",
    description: "You can align text to the left, center, or right.",
  },
};
