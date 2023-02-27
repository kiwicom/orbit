import React from "react";
import { TextLink, Stack } from "@kiwicom/orbit-components";
import { ChevronForward, NewWindow } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack flex>
      <TextLink
        href="https://orbit.kiwi"
        external
        iconRight={<NewWindow ariaLabel="Opens in new window" />}
      >
        Orbit design system
      </TextLink>
      <TextLink iconRight={<ChevronForward />}>Skip this step</TextLink>
    </Stack>
  ),
};
