import * as React from "react";
import { InputField, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
