// @flow
import * as React from "react";

import Heading from "../../Heading";
import Text from "../../Text";
import InputStepper from "../index";
import Stack from "../../Stack";

const Example = () => {
  const ref: {| current: React.ElementRef<any> |} = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  return (
    <Stack direction="column">
      <Heading>References</Heading>
      <Text>For actions like automatically focusing on an input stepper, use the ref prop.</Text>
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
    </Stack>
  );
};

export default Example;
