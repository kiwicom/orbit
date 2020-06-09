// @flow
import * as React from "react";

import Button from "../index";
import Stack from "../../Stack";

export default {
  Example: () => (
    <Stack flex>
      <Button size="small">Small button</Button>
      <Button>Normal button</Button>
      <Button size="large">Large button</Button>
    </Stack>
  ),
  info: {
    title: "Button sizes",
    description: "Buttons buttons come in three sizes: small, normal, and large.",
  },
};
