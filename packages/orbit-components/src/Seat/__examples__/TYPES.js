// @flow
import * as React from "react";

import Heading from "../../Heading";
import Seat from "../index";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack flex>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Default
        </Heading>
        <Seat />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Extra legroom
        </Heading>
        <Seat type="legroom" />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Selected
        </Heading>
        <Seat type="selected" />
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Unavailable
        </Heading>
        <Seat type="unavailable" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Types",
    description: "The types of seats indicate information about the possible options.",
  },
};
