// @flow
import * as React from "react";

import CountryFlag from "../index";
import Stack from "../../Stack";
import Text from "../../Text";

export default {
  Example: () => (
    <Stack direction="column">
      <CountryFlag code="cz" name="Czech Republic" />
      <Stack direction="row" spacing="XXSmall" align="center">
        <CountryFlag name="" code="cz" />
        <Text>Czech Republic</Text>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Accessibility",
    description:
      "When the flag is used alone, include the name of the country for people who won't see the flag. If the country name is present in the text, include a blank name to make it clear it's just decoration.",
  },
};
