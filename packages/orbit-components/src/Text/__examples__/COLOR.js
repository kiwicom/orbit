// @flow
import * as React from "react";

import Text from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <Text>Primary text</Text>
      <Text type="secondary">Secondary text</Text>
    </Stack>
  ),
  info: {
    title: "Text color",
    description:
      "There are two main colors to work with: primary (Ink / Normal) and secondary (Ink / Light).",
  },
};
