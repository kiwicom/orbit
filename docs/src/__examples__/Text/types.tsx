import React from "react";
import { Text, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Stack>
        <Text size="large">Primary Large text</Text>
        <Text>Primary Normal text</Text>
        <Text size="small">Primary small text</Text>
      </Stack>
      <Stack>
        <Text size="large" type="secondary">
          Secondary Large text
        </Text>
        <Text type="secondary">Secondary Normal text</Text>
        <Text size="small" type="secondary">
          Secondary small text
        </Text>
      </Stack>
    </Stack>
  ),
  info: {},
};
