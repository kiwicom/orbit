import * as React from "react";
import { Stack, Text, Desktop } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Text>This text appears all of the time. Resize to change other text.</Text>
      <Desktop>
        <Text>This text only appears on larger screens.</Text>
      </Desktop>
    </Stack>
  ),
  info: {
    title: "Default desktop",
    description: "Desktop components hide their children on small screens (tablet and below).",
  },
};
