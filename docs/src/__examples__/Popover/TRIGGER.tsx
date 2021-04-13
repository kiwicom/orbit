import * as React from "react";
import { Popover, Button, ButtonLink, Stack } from "@kiwicom/orbit-components";
import { ChevronDown } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Popover
      content={
        <Stack spacing="small">
          <ButtonLink
            external
            type="secondary"
            fullWidth
            href="https://orbit.kiwi/components/popover/react/"
          >
            Reference
          </ButtonLink>
          <ButtonLink
            external
            type="secondary"
            fullWidth
            href="https://orbit.kiwi/components/popover/"
          >
            Guidelines
          </ButtonLink>
        </Stack>
      }
      preferredPosition="bottom"
    >
      <Button iconRight={<ChevronDown />} type="secondary">
        Learn more
      </Button>
    </Popover>
  ),
  info: {
    title: "Clear trigger",
    description:
      "Popovers hide information from the initial screen, so make it clear to users how they can get that information, such as with a button with a chevron down icon on the right.",
  },
};
