import React from "react";
import { Airplane } from "@kiwicom/orbit-components/icons";
import { Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Stack>
        <Text>Small</Text>
        <Airplane size="small" ariaLabel="Airplane" />
      </Stack>
      <Stack>
        <Text>Medium</Text>
        <Airplane ariaLabel="Airplane" />
      </Stack>
      <Stack>
        <Text>Large</Text>
        <Airplane size="large" ariaLabel="Airplane" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Icon colors",
    description: "Icons come in three sizes: small, medium (the default), and large.",
  },
};
