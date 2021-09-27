import React from "react";
import { Stack, Text, CarrierLogo } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <CarrierLogo
        carriers={[
          {
            code: "OK",
            type: "airline",
            name: "Czech Airlines",
          },
        ]}
      />
      <Stack direction="row" spacing="XXSmall" align="center">
        <CarrierLogo
          carriers={[
            {
              code: "OK",
              type: "airline",
              name: "",
            },
          ]}
        />
        <Text>Czech Airlines</Text>
      </Stack>
    </Stack>
  ),
};
