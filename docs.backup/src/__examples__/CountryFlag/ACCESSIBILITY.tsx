import React from "react";
import { Stack, Text, CountryFlag } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <CountryFlag code="cz" name="Czech Republic" />
      <Stack direction="row" spacing="100" align="center">
        <CountryFlag name="" code="cz" />
        <Text>Czech Republic</Text>
      </Stack>
    </Stack>
  ),
};
