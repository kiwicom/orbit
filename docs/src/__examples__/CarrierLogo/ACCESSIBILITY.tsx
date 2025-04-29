import React from "react";
import { Stack, Text, CarrierLogo, OrbitProvider, defaultTheme } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
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
        <Stack direction="row" spacing="100" align="center">
          <CarrierLogo
            ariaHidden
            carriers={[
              {
                code: "OK",
                type: "airline",
                name: "Czech Airlines",
              },
            ]}
          />
          <Text>Czech Airlines</Text>
        </Stack>
      </Stack>
    </OrbitProvider>
  ),
};
