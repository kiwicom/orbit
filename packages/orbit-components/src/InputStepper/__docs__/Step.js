// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import InputStepper from "../index";
import Stack from "../../Stack";

const Example = () => {
  return (
    <Stack direction="column">
      <Heading>Step</Heading>
      <Text>
        To increment by a number other than 1, use the <code>step</code> prop.
      </Text>
      <div style={{ maxWidth: "11em" }}>
        <InputStepper
          step={15}
          defaultValue={30}
          maxValue={180}
          minValue={15}
          label="Minutes between journeys"
          titleIncrement="Add 15 minutes"
          titleDecrement="Subtract 15 minutes"
        />
      </div>
    </Stack>
  );
};

export default Example;
