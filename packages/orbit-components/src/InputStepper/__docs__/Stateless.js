// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import Stack from "../../Stack";
import InputStepperStateless from "../InputStepperStateless";

const Example = () => {
  const maxValue = 10;
  const minValue = 1;
  const [value, setValue] = React.useState(3);
  const incrementValue = () => {
    setValue(value + 1);
  };
  const decrementValue = () => {
    setValue(value - 1);
  };

  return (
    <Stack direction="column">
      <Heading>Stateless input stepper</Heading>
      <Text>
        To implement a custom input stepper, use the stateless input stepper. Be aware that you will
        have to implement all validation yourself.
      </Text>
      <div style={{ maxWidth: "11em" }}>
        <InputStepperStateless
          value={`${value} adults`}
          disabledDecrement={value <= minValue}
          disabledIncrement={value >= maxValue}
          onIncrement={incrementValue}
          onDecrement={decrementValue}
          label="Travelers"
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
        />
      </div>
    </Stack>
  );
};

export default Example;
