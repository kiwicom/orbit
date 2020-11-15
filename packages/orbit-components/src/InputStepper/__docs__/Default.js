// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import InputStepper from "../index";
import Stack from "../../Stack";

const Example = () => {
  return (
    <Stack direction="column">
      <Heading>Default input stepper</Heading>
      <Text>
        By default, input steppers allow users to go up to their maximums and down to their minimum
        and then disables the buttons. It displays the <code>defaultValue</code> on initial mount.
      </Text>
      <div style={{ maxWidth: "11em" }}>
        <InputStepper
          label="Travelers"
          minValue={1}
          defaultValue={2}
          maxValue={10}
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
        />
      </div>
    </Stack>
  );
};

export default Example;
