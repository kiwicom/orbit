// @flow
import * as React from "react";

import Button from "../../Button";
import Heading from "../../Heading";
import Stack from "../../Stack";
import Text from "../../Text";
import Tooltip from "../index";

export default {
  Example: (): React.Node => (
    <Stack>
      <Stack>
        <Heading type="title3" as="h4">
          Start
        </Heading>
        <Tooltip preferredAlign="start" content={<Text>Select a flight before continuing.</Text>}>
          <Button size="large" disabled>
            Book
          </Button>
        </Tooltip>
      </Stack>
      <Stack>
        <Heading type="title3" as="h4">
          Center
        </Heading>
        <Tooltip preferredAlign="center" content={<Text>Select a flight before continuing.</Text>}>
          <Button size="large" disabled>
            Book
          </Button>
        </Tooltip>
      </Stack>
      <Stack>
        <Heading type="title3" as="h4">
          End
        </Heading>
        <Tooltip preferredAlign="end" content={<Text>Select a flight before continuing.</Text>}>
          <Button size="large" disabled>
            Book
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Alignment",
    description:
      "If you set a preferred alignment, the tooltip will be placed there if there's room. Otherwise, preference is given in the order of: center, start, end.",
  },
};
