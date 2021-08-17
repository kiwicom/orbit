import React from "react";
import { Heading, Stack, CarrierLogo } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Small
        </Heading>
        <CarrierLogo
          size="small"
          carriers={[
            {
              code: "OK",
              type: "airline",
              name: "Czech Airlines",
            },
          ]}
        />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Medium
        </Heading>
        <CarrierLogo
          size="medium"
          carriers={[
            {
              code: "OK",
              type: "airline",
              name: "Czech Airlines",
            },
          ]}
        />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Large
        </Heading>
        <CarrierLogo
          carriers={[
            {
              code: "OK",
              type: "airline",
              name: "Czech Airlines",
            },
          ]}
        />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description:
      "Logos can be small, medium, or large (the default). Note that this only applies to single logos and does not work for multiple logos. Multiple logos are always small.",
  },
};
