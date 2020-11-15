// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import InputStepper from "../index";
import Stack from "../../Stack";

const Example = () => {
  return (
    <Stack direction="column">
      <Heading>Required</Heading>
      <Text>To mark an input stepper as required, pass the required prop.</Text>
      <div style={{ maxWidth: "11em" }}>
        <InputStepper
          required
          label="Travelers"
          minValue={1}
          defaultValue={0}
          maxValue={10}
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
        />
      </div>
    </Stack>
  );
};

export default Example;
