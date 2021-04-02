// @flow
import * as React from "react";

import InputStepper from "../index";

export default {
  Example: (): React.Element<"div"> => {
    const ref: {| current: React.ElementRef<any> |} = React.useRef(null);

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
