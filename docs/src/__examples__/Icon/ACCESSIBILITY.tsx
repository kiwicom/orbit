import React from "react";
import { Airplane, Passengers } from "@kiwicom/orbit-components/icons";
import { Inline, Stack, Text } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack>
      <Inline align="center">
        <Passengers ariaLabel="Passengers" /> <Text>4</Text>
      </Inline>
      <Inline align="center">
        <Airplane ariaHidden /> <Text>Flights</Text>
      </Inline>
    </Stack>
  ),
};
