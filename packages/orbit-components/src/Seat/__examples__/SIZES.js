// @flow
import * as React from "react";

import Heading from "../../Heading";
import Seat from "../index";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Small
        </Heading>
        <Stack direction="row">
          <Seat size="small" />
          <Seat size="small" selected />
          <Seat size="small" type="legroom" />
          <Seat size="small" type="unavailable" />
        </Stack>
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Medium
        </Heading>
        <Stack direction="row">
          <Seat />
          <Seat selected />
          <Seat type="legroom" />
          <Seat type="unavailable" />
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description:
      "Seats can be either small or medium (the default). We recommend using the medium size for desktop screens and small for mobiles.",
  },
};
