// @flow
import * as React from "react";

import TextLink from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack flex>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3" as="h3">
          Primary
        </Heading>
        <TextLink href="https://orbit.kiwi">Orbit design system</TextLink>
      </Stack>
      <Stack shrink direction="column" spacing="XSmall">
        <Heading type="title3" as="h3">
          Secondary
        </Heading>
        <TextLink type="secondary" href="https://orbit.kiwi">
          Orbit design system
        </TextLink>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Types",
    description: "Text links can be either primary or secondary.",
  },
};
