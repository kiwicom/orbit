import React from "react";
import { Text, Stack, Hide, Separator } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Text>This text appears all of the time. Resize to change other text.</Text>
      <Hide on={["largeMobile", "tablet"]}>
        <Text>
          This text and the separator following it appear on small and wide screens&mdash;not large
          mobile and table screens.
        </Text>
      </Hide>
      <Hide block on={["largeMobile", "tablet"]}>
        <Separator />
      </Hide>
      <Hide on={["largeMobile", "tablet"]}>
        <Text>
          This text appears on small and wide screens&mdash;not large mobile and table screens. The
          separator following it has <code>display</code> set to <code>inline-block</code> and so
          does not display.
        </Text>
      </Hide>
      <Hide on={["largeMobile", "tablet"]}>
        <Separator />
      </Hide>
    </Stack>
  ),
};
