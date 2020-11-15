// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import InputStepper from "../index";
import Stack from "../../Stack";

const Example = () => {
  return (
    <Stack direction="column">
      <Heading>Error messages</Heading>
      <Text>
        Include error messages when validation isn not passed, either on change in focus or form
        submission. Note that an error message will override any help text.
      </Text>
      <div style={{ maxWidth: "11em" }}>
        <InputStepper
          label="Travelers"
          minValue={1}
          defaultValue={12}
          maxValue={10}
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
          help="At least 1 and no more than 10 travelers"
          error="Decrease the number of travelers to no more than 10"
        />
      </div>
    </Stack>
  );
};

export default Example;
