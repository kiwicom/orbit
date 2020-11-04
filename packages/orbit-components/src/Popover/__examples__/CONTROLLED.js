// @flow
import * as React from "react";

import Button from "../../Button";
import ButtonLink from "../../ButtonLink";
import Heading from "../../Heading";
import Popover from "../index";
import Stack from "../../Stack";
import Text from "../../Text";
import * as Icons from "../../icons";

export default {
  Example: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <Stack spacing="XXLarge">
        <Popover
          opened={isOpen}
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
        <Stack direction="column" align="end">
          <Heading>Separate button</Heading>
          <Text>
            This button is not a child of the popover. It is external but controls the state.
          </Text>
          <div style={{ zIndex: 9999 }}>
            <Button onClick={() => setIsOpen(!isOpen)}>Change state</Button>
          </div>
        </Stack>
      </Stack>
    );
  },
  info: {
    title: "Controlled popover",
    description:
      "When passed the opened prop, the popover does not respond to its ordinary triggers and becomes a controlled component.",
  },
};
