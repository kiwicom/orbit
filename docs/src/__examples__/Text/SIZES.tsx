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
};
