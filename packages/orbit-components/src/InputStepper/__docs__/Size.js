// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import InputStepper from "../index";
import Stack from "../../Stack";

const Example = () => {
  return (
    <Stack direction="column">
      <Heading>Sizes</Heading>
      <Text>Input steppers can be either normal sized or small.</Text>
      <Stack direction="column">
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
        <div style={{ maxWidth: "11em" }}>
          <InputStepper
            size="small"
            label="Travelers"
            minValue={1}
            defaultValue={2}
            maxValue={10}
            titleIncrement="Add a traveler"
            titleDecrement="Remove a traveler"
          />
        </div>
      </Stack>
    </Stack>
  );
};

export default Example;
