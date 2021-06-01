import * as React from "react";
import { Popover, Button, ButtonLink, Heading, Stack } from "@kiwicom/orbit-components";
import { QuestionCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Stack>
      <Stack>
        <Heading type="title3" as="h4">
          Start
        </Heading>
        <Popover
          renderInPortal={false}
          preferredAlign="start"
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
      <Stack>
        <Heading type="title3" as="h4">
          Center
        </Heading>
        <Popover
          renderInPortal={false}
          preferredAlign="center"
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
      <Stack>
        <Heading type="title3" as="h4">
          End
        </Heading>
        <Popover
          renderInPortal={false}
          preferredAlign="end"
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
    </Stack>
  ),
  info: {
    title: "Alignment",
    description:
      "If you set a preferred alignment, the popover will be placed there if there's room. Otherwise, preference is given in the order of: start, center, end.",
  },
};
