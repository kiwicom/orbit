// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import InputStepper from "../index";
import Stack from "../../Stack";

const Example = () => {
  return (
    <Stack direction="column">
      <Heading>Help</Heading>
      <Text>
        Help text can guide users to making the right choice. Note that an error message will
        override the help text.
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
