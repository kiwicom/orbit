import React from "react";
import { Heading, Stack, CountryFlag } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Small
        </Heading>
        <CountryFlag size="small" code="es" name="Spain" />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Medium
        </Heading>
        <CountryFlag code="es" name="Spain" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Country flags can be small or medium (the default).",
  },
};
