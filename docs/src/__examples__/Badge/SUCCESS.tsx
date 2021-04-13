import * as React from "react";
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
  info: {
    title: "Success badges",
    description:
      "Success badges help to highlight something desirable has happened or will happen. You can use them in situations like a confirmation of a user action (such as booking a trip) or potentially attractive options (such as free baggage).",
  },
};
