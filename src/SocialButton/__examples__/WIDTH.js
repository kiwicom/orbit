// @flow
import * as React from "react";

import SocialButton from "../index";
import Heading from "../../Heading";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <Stack shrink direction="column" spacing="condensed">
          <Heading type="title3">Full width</Heading>
          <SocialButton fullWidth>Sign in with Apple </SocialButton>
        </Stack>
        <Stack shrink direction="column" spacing="condensed">
          <Heading type="title3">Half width</Heading>
          <SocialButton width="50%">Sign in with Apple </SocialButton>
        </Stack>
      </Stack>
      <Stack flex>
        <Stack shrink direction="column" spacing="condensed">
          <Heading type="title3">Fixed width</Heading>
          <SocialButton width="240px">Sign in with Apple </SocialButton>
        </Stack>
        <Stack shrink direction="column" spacing="condensed">
          <Heading type="title3">Normal width</Heading>
          <SocialButton>Sign in with Apple </SocialButton>
        </Stack>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Widths",
    description: "Buttons can take up space relative to their containers or have fixed widths.",
  },
};
