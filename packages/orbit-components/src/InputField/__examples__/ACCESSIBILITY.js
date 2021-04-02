// @flow
import * as React from "react";

import Illustration from "../../Illustration";
import InputField from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
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
