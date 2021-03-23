import * as React from "react";
import { Stack, Heading, StepperStateless } from "@kiwicom/orbit-components";

export default {
  Example: () => {
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
      <Stack flex align="center">
        <Heading type="title4">Travelers</Heading>
        <div style={{ maxWidth: "10em" }}>
          <StepperStateless
            value={`${value} adults`}
            disabledDecrement={value <= minValue}
            disabledIncrement={value >= maxValue}
            onIncrement={incrementValue}
            onDecrement={decrementValue}
            titleIncrement="Add a traveler"
            titleDecrement="Remove a traveler"
          />
        </div>
      </Stack>
    );
  },
  info: {
    title: "Stateless stepper",
    description:
      "To implement a custom stepper, use the stateless stepper. Be aware that you'll have to implement all validation yourself.",
  },
};
