// @flow
import * as React from "react";

import Button from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <Stack flex>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Full width</Heading>
          <Button fullWidth>Save</Button>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Half width</Heading>
          <Button width="50%">Save</Button>
        </Stack>
      </Stack>
      <Stack flex>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Fixed width</Heading>
          <Button width="120px">Save</Button>
        </Stack>
        <Stack shrink direction="column" spacing="XSmall">
          <Heading type="title3">Normal width</Heading>
          <Button>Save</Button>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Button widths",
    description: "Buttons can take up space relative to their containers or have fixed widths.",
  },
};
