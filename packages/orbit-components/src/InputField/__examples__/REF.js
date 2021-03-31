// @flow
import * as React from "react";

import InputField from "../index";

export default {
  Example: (): React.Node => {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return <InputField label="Given names" placeholder="Sofia Cruz" ref={ref} />;
  },
  info: {
    title: "References",
    description: "For actions like automatically focusing on an input field, use the ref prop.",
  },
};
