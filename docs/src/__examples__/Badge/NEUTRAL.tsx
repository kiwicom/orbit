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
  info: {
    title: "Neutral badges",
    description:
      "Neutral badges present information without adding any emotion. They’re useful when the information is not so important to the user’s main flow.",
  },
};
