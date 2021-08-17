import React from "react";
import { Check } from "@kiwicom/orbit-components/icons";
import { Stack, Badge } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Badge type="success" icon={<Check ariaLabel="Success" />}>
        Included in price
      </Badge>
      <Badge type="successInverted" icon={<Check ariaLabel="Success" />}>
        Included in price
      </Badge>
    </Stack>
  ),
};
