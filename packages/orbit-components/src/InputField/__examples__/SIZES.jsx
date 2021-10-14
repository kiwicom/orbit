// @flow
import * as React from "react";

import InputField from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <InputField label="Email" placeholder="jose@example.com" type="email" inputMode="email" />
      <InputField
        label="Email"
        placeholder="jose@example.com"
        type="email"
        inputMode="email"
        size="small"
      />
    </Stack>
  ),
  info: {
    title: "Sizes",
    description: "Input fields can be either normal sized or small.",
  },
};
