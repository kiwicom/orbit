import React from "react";
import { CarrierLogo, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <CarrierLogo
        carriers={[
          {
            code: "OrbitAir",
            type: "airline",
            name: "Orbit Airlines",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OrbitBus",
            type: "bus",
            name: "Orbit Bus",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OrbitFerry",
            type: "ferry",
            name: "Orbit Ferry Lines",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OrbitPriv",
            type: "private_transfer",
            name: "Orbit Private Transport",
          },
        ]}
      />
      <CarrierLogo
        carriers={[
          {
            code: "OrbitTrain",
            type: "train",
            name: "Orbit Rail",
          },
        ]}
      />
    </Stack>
  ),
  info: {
    title: "Placeholders",
    description:
      "Define the type of carrier so that the proper placeholder image can be displayed if no logo is returned.",
  },
};
