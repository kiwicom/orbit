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
      <Stack direction="column" align="center">
        <Heading type="title3" as="h4">
          Right
        </Heading>
        <Tooltip content={<Text>Select a flight before continuing.</Text>}>
          <Button disabled>Book</Button>
        </Tooltip>
      </Stack>
      <Stack direction="column" align="center">
        <Heading type="title3" as="h4">
          Left
        </Heading>
        <Tooltip preferredPosition="left" content={<Text>Select a flight before continuing.</Text>}>
          <Button disabled>Book</Button>
        </Tooltip>
      </Stack>
      <Stack direction="column" align="center">
        <Heading type="title3" as="h4">
          Bottom
        </Heading>
        <Tooltip
          preferredPosition="bottom"
          content={<Text>Select a flight before continuing.</Text>}
        >
          <Button disabled>Book</Button>
        </Tooltip>
      </Stack>
      <Stack direction="column" align="center">
        <Heading type="title3" as="h4">
          Top
        </Heading>
        <Tooltip preferredPosition="top" content={<Text>Select a flight before continuing.</Text>}>
          <Button disabled>Book</Button>
        </Tooltip>
      </Stack>
    </Stack>
  ),
  info: {
    title: "Position",
    description:
      "If you set a preferred position relative to the child, the tooltip will be placed there if there's room. Otherwise, preference is given in the order of: right, left, top, and bottom.",
  },
};
