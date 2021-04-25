import * as React from "react";
import { ServiceLogo, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
