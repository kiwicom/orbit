import React from "react";
import { Text, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
