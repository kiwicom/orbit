import * as React from "react";
import { Popover, Button, ButtonLink, Stack } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
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
      >
        <Button circled title="Help" iconLeft={<Icons.QuestionCircle />} />
      </Popover>
      <Popover
        width="400px"
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
        <Button circled title="Help" iconLeft={<Icons.QuestionCircle />} />
      </Popover>
    </Stack>
  ),
  info: {
    title: "Width",
    description:
      "By default, popover width is based on their content. This can be overridden with the width prop.",
  },
};
