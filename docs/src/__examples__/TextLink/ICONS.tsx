import React from "react";
import { TextLink, Stack } from "@kiwicom/orbit-components";
import { ChevronRight, NewWindow } from "@kiwicom/orbit-components/icons";

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
      <TextLink iconRight={<ChevronRight />}>Skip this step</TextLink>
    </Stack>
  ),
};
