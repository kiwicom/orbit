// @flow
import * as React from "react";

import ServiceLogo from "../index";
import Stack from "../../Stack";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <ServiceLogo name="Axa" size="large" />
      <ServiceLogo name="Axa" size="large" grayScale />
    </Stack>
  ),
  info: {
    title: "Grayscale",
    description: "Service logos can come in grayscale versions.",
  },
};
