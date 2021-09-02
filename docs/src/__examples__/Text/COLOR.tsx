import React from "react";
import { Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
