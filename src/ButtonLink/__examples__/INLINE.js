// @flow
import * as React from "react";

import ButtonLink from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => (
    <Stack direction="column" spacing="condensed">
      <Heading as="h3" type="title3">
        Baggage
      </Heading>
      <Stack flex spacing="condensed">
        <Icons.BaggageCabin />
        <Stack direction="column" basis="160px" spacing="extraTight">
          <Text>Cabin bag</Text>
          <Text type="secondary">65 × 45 × 25 cm, 10 kg</Text>
        </Stack>

        <Stack direction="column" spacing="none">
          <Text>$16.48</Text>
          <ButtonLink compact>Change</ButtonLink>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Inline button links",
    description:
      "Inline button links work for actions outside paragraphs. They provide enough of a vertical target area so users can interact with them. Make them compact so they don't have horizontal padding and they're useful in small spaces.",
  },
};
