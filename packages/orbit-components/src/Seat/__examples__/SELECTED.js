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
          <Seat size="small" selected type="default" />
          <Seat size="small" selected type="legroom" />
        </Stack>
      </Stack>
      <Stack spacing="XXSmall">
        <Heading as="h3" type="title3">
          Medium
        </Heading>
        <Stack direction="row">
          <Seat size="medium" selected type="default" />
          <Seat size="medium" selected type="legroom" />
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Selected",
    description: "Seats can be selected.",
  },
};
