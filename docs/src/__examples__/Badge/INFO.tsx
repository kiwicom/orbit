import * as React from "react";
import { Train } from "@kiwicom/orbit-components/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Badge type="info" ariaLabel="Train" icon={<Train />} />
      <Badge type="infoInverted" ariaLabel="Train" icon={<Train />} />
    </Stack>
  ),
};
