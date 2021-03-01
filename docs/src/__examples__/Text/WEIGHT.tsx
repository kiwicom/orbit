import * as React from "react";
import { Text, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
