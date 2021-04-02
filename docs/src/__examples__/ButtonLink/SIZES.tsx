import * as React from "react";
import { Stack, ButtonLink } from "@kiwicom/orbit-components";

export default {
  Example: () => (
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
