// @flow
import * as React from "react";

import Stack from "../../Stack";
import Stepper from "../index";
import Heading from "../../Heading";
import * as Icons from "../../icons";

export default {
  Example: (): React.Node => (
    <Stack flex align="center">
      <Heading type="title4">
        <Icons.Passengers />
        Travelers
      </Heading>
      <div style={{ maxWidth: "10em" }}>
        <Stepper
          defaultValue={2}
          maxValue={10}
          minValue={1}
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
        />
      </div>
    </Stack>
  ),
  info: {
    title: "Default stepper",
    description:
      "By default, steppers allow users to go up to their maximums and down to their minimum and then disables the buttons. It displays the <code>defaultValue</code> on initial mount.",
  },
};
