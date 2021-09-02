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
  info: {
    title: "Accessibility",
    description:
      "When the logo is used alone, include the name of the carrier for people who won't see the logo. If the carrier name is present in the text, include a blank name so as not to unnecessarily repeat it.",
  },
};
