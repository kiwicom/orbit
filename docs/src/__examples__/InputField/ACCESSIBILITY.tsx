import React from "react";
import { Illustration, InputField, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <label htmlFor="names">Given names</label>
      <Illustration name="Success" />
      <InputField placeholder="Sofia Cruz" id="names" />
    </Stack>
  ),
  info: {
    title: "Accessibility",
    description:
      "If you need to separate the label from the input, match the for prop on the label with the id props on the input field. Never leave the input field without a connected label.",
  },
};
