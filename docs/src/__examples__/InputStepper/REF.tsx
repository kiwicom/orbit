import * as React from "react";
import { InputStepper } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const ref = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return (
      <div style={{ maxWidth: "11em" }}>
        <InputStepper
          ref={ref}
          label="Travelers"
          minValue={1}
          defaultValue={2}
          maxValue={10}
          titleIncrement="Add a traveler"
          titleDecrement="Remove a traveler"
        />
      </div>
    );
  },
  info: {
    title: "References",
    description: "For actions like automatically focusing on an input stepper, use the ref prop.",
  },
};
