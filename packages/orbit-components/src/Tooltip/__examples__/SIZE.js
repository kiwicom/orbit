// @flow
import * as React from "react";

import Button from "../../Button";
import Stack from "../../Stack";
import Text from "../../Text";
import Tooltip from "../index";

export default {
  Example: (): React.Node => (
    <Stack direction="column">
      <Tooltip
        size="small"
        content={
          <Text>
            In order to book a trip, you first need to select an itinerary. Select the trip that
            works for you.
          </Text>
        }
      >
        <Button disabled>Book</Button>
      </Tooltip>
      <Tooltip
        size="medium"
        content={
          <Text>
            In order to book a trip, you first need to select an itinerary. Select the trip that
            works for you.
          </Text>
        }
      >
        <Button disabled>Book</Button>
      </Tooltip>
    </Stack>
  ),
  info: {
    title: "Size",
    description:
      "You can control the maximum width that the tooltip will have on larger screens. By default, the maximum width is medium, but you can constrain it to small for smaller spaces.",
  },
};
