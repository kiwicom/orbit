import React from "react";
import { Seat, Heading, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Small
        </Heading>
        <Stack direction="row">
          <Seat size="small" type="default" />
          <Seat size="small" type="default" selected />
          <Seat size="small" type="legroom" />
          <Seat size="small" type="unavailable" />
        </Stack>
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Medium
        </Heading>
        <Stack direction="row">
          <Seat type="default" />
          <Seat type="default" selected />
          <Seat type="legroom" />
          <Seat type="unavailable" />
        </Stack>
      </Stack>
    </Stack>
  ),
};
