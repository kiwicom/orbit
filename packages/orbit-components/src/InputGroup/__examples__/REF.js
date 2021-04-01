// @flow
import * as React from "react";

import InputField from "../../InputField";
import InputGroup from "../index";

export default {
  Example: (): React.Node => {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return (
      <InputGroup flex={["1 1 4em"]} label="Expiration date">
        <InputField placeholder="MM" maxValue={12} minValue={1} type="number" />
        <InputField placeholder="YYYY" type="number" minValue={2020} ref={ref} />
      </InputGroup>
    );
  },
  info: {
    title: "References",
    description:
      "For actions like automatically focusing on an input field within the group, use the ref prop. You can't focus on the group as a whole.",
  },
};
