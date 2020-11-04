// @flow
import * as React from "react";

import ButtonLink from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Full width</Heading>
          <ButtonLink fullWidth>Save</ButtonLink>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Half width</Heading>
          <ButtonLink width="50%">Save</ButtonLink>
        </Stack>
      </Stack>
      <Stack flex>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Fixed width</Heading>
          <ButtonLink width="120px">Save</ButtonLink>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Normal width</Heading>
          <ButtonLink>Save</ButtonLink>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Button link widths",
    description:
      "Button links can take up space relative to their containers or have fixed widths.",
  },
};
