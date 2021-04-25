// @flow
import * as React from "react";

import Checkbox from "../index";

export default {
  Example: (): React.Node => {
    const ref: {| current: React.ElementRef<any> |} = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return <Checkbox label="Allow notifications" ref={ref} readOnly />;
  },
  info: {
    title: "References",
    description: "For actions like automatically focusing on a checkbox, use the ref prop.",
  },
};
