// @flow
import * as React from "react";

import Heading from "../../Heading";
import ServiceLogo from "../index";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Small
        </Heading>
        <ServiceLogo size="small" name="Booking" />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Medium
        </Heading>
        <ServiceLogo name="Booking" />
      </Stack>
      <Stack direction="column">
        <Heading type="title3" as="h3">
          Large
        </Heading>
        <ServiceLogo size="large" name="Booking" />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Logos can be small, medium (the default), or large.",
  },
};
