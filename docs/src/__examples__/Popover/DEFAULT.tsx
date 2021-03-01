import * as React from "react";
import { Popover, Button, ButtonLink, Stack } from "@kiwicom/orbit-components";
import * as Icons from "@kiwicom/orbit-components/lib/icons";

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
    >
      <Button circled title="Help" iconLeft={<Icons.QuestionCircle />} />
    </Popover>
  ),
  info: {
    title: "Default popover",
    description:
      "By default, popovers will open on a click of their trigger with a preference for aligning with the start of and underneath their child.",
  },
};
