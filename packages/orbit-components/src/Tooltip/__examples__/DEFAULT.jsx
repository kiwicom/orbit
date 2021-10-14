// @flow
import * as React from "react";

import Button from "../../Button";
import Text from "../../Text";
import Tooltip from "../index";

export default {
  Example: (): React.Node => (
    <Tooltip content={<Text>Select a flight before continuing.</Text>}>
      <Button disabled>Book</Button>
    </Tooltip>
  ),
  info: {
    title: "Default tooltip",
    description:
      "By default, tooltips will open on hover over their child on large devices and a click on the child on smaller devices. By default, preference is given to aligning to the right and in the center of the child.",
  },
};
