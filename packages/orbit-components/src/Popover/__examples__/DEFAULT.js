// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import Popover from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
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
