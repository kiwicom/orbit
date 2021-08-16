import * as React from "react";
import { Train } from "@kiwicom/orbit-components/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Badge type="neutral" ariaLabel="Train" icon={<Train />} />
      <Badge type="dark" ariaLabel="Train" icon={<Train />} />
    </Stack>
  ),
};
