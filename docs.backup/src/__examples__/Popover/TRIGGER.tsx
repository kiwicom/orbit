import React from "react";
import {
  Popover,
  Button,
  ButtonLink,
  Stack,
  OrbitProvider,
  defaultTheme,
} from "@kiwicom/orbit-components";
import { ChevronDown } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Popover
        renderInPortal={false}
        ariaLabel="Documentation resources"
        content={
          <Stack spacing="300">
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
        <Button asComponent="div" iconRight={<ChevronDown />} type="secondary">
          Learn more
        </Button>
      </Popover>
    </OrbitProvider>
  ),
};
