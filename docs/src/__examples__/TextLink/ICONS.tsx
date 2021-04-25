import * as React from "react";
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
  info: {
    title: "Icons",
    description:
      "Icons add visual context to text links, such as letting users know the link will open in a new window/tab or that they are moving forward in the flow. Remember to include all necessary information also non-visually so everyone can access it.",
  },
};
