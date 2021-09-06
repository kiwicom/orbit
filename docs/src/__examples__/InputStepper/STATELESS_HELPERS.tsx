import React from "react";
import { InputStepperStateless } from "@kiwicom/orbit-components";
import validateDecrement from "@kiwicom/orbit-components/lib/utils/validateDecrement";
import validateIncrement from "@kiwicom/orbit-components/lib/utils/validateIncrement";

export default {
  Example: () => {
    const maxValue = 10;
    const minValue = 1;
    const step = 1;
    const [value, setValue] = React.useState(3);
    const incrementValue = () => {
      setValue(validateIncrement({ value, maxValue, step }));
    };
    const decrementValue = () => {
      setValue(validateDecrement({ value, minValue, step }));
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
    title: "Stateless helpers",
    description: "Use the provided helper functions to validate your stateless stepper.",
  },
};
