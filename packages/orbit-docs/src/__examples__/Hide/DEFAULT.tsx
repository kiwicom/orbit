import React from "react";
import { Text, Stack, Hide } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Text>This text appears all of the time. Resize to change other text.</Text>
      <Hide on={["largeMobile", "tablet"]}>
        <Text>
          This text appears on small and wide screens&mdash;not large mobile and table screens.
        </Text>
      </Hide>
    </Stack>
  ),
};
