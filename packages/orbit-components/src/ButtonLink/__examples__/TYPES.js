// @flow
import * as React from "react";

import ButtonLink from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack flex>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3">Type: Primary</Heading>
        <ButtonLink>Add passenger</ButtonLink>
      </Stack>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3">Type: Secondary</Heading>
        <ButtonLink type="secondary">Cancel</ButtonLink>
      </Stack>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3">Type: Critical</Heading>
        <ButtonLink type="critical">Cancel</ButtonLink>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Button link types",
    description: "Button links come in three types: primary, secondary, and critical.",
  },
};
