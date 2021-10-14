// @flow
import * as React from "react";

import Text from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <Text type="info">Informational text</Text>
      <Text type="success">Success text</Text>
      <Text type="warning">Warning text</Text>
      <Text type="critical">Critical text</Text>
      <div
        style={{
          backgroundColor: "#252A31",
          padding: "8px",
        }}
      >
        <Text type="white">White text</Text>
      </div>
    </Stack>
  ),
  info: {
    title: "Text size",
    description:
      "Text components have supplementary colors for when you need to match text to a specific status (as in alerts) or when you’re writing on a dark background.",
  },
};
