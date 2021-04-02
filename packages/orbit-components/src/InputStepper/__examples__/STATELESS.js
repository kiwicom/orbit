// @flow
import * as React from "react";

import InputStepperStateless from "../InputStepperStateless";

export default {
  Example: (): React.Element<"div"> => {
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
    );
  },
  info: {
    title: "Stateless input stepper",
    description:
      "To implement a custom input stepper, use the stateless input stepper. Be aware that you'll have to implement all validation yourself.",
  },
};
