import React from "react";
import { Popover, Button, ButtonLink, Stack } from "@kiwicom/orbit-components";
import { ChevronDown } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Popover
      renderInPortal={false}
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
    >
      <Button iconRight={<ChevronDown />} type="secondary">
        Learn more
      </Button>
    </Popover>
  ),
};
