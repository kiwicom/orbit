// @flow
import * as React from "react";

import ButtonLink from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack flex>
      <ButtonLink size="small">Small button link</ButtonLink>
      <ButtonLink>Normal button link</ButtonLink>
      <ButtonLink size="large">Large button link</ButtonLink>
    </Stack>
  ),
  info: {
    title: "Button link sizes",
    description: "Button links come in three sizes: small, normal, and large.",
  },
};
