// @flow
import * as React from "react";

import Text from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <Text>Normal text</Text>
      <Text weight="bold">Bold text</Text>
    </Stack>
  ),
  info: {
    title: "Text weight",
    description: "There are only two possible weights for text: normal and bold",
  },
};
