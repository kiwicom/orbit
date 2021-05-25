import * as React from "react";
import { Popover, Button, ButtonLink, Stack } from "@kiwicom/orbit-components";
import { QuestionCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
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
        <Button circled title="Help" iconLeft={<QuestionCircle />} />
      </Popover>
      <Popover
        renderInPortal={false}
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
        <Button circled title="Help" iconLeft={<QuestionCircle />} />
      </Popover>
    </Stack>
  ),
  info: {
    title: "Width",
    description:
      "By default, popover width is based on their content. This can be overridden with the width prop.",
  },
};
