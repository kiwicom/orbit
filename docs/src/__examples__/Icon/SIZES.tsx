import * as React from "react";
import * as Icons from "@kiwicom/orbit-components/lib/icons";
import { Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack flex>
      <Stack>
        <Text>Small</Text>
        <Icons.Airplane size="small" ariaLabel="Airplane" />
      </Stack>
      <Stack>
        <Text>Medium</Text>
        <Icons.Airplane ariaLabel="Airplane" />
      </Stack>
      <Stack>
        <Text>Large</Text>
        <Icons.Airplane size="large" ariaLabel="Airplane" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Icon colors",
    description: "Icons come in three sizes: small, medium (the default), and large.",
  },
};
