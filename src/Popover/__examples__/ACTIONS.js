// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import Popover from "../index";
import Stack from "../../Stack";
import * as Icons from "../../icons";

export default {
  Example: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <Popover
        actions={
          <Stack direction="row" justify="end">
            <Button type="primarySubtle" onClick={() => setIsOpen(false)}>
              Close this popover
            </Button>
          </Stack>
        }
        opened={isOpen}
        content={
          <Stack spacing="compact">
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
        <Button
          circled
          title="Help"
          iconLeft={<Icons.QuestionCircle />}
          onClick={() => setIsOpen(true)}
        />
      </Popover>
    );
  },
  info: {
    title: "Actions",
    description:
      "The actions prop adds a space for actions to popovers. Keep in mind that this overrides the close action on smaller screens, so at least one of the actions you include needs to close the popover.",
  },
};
