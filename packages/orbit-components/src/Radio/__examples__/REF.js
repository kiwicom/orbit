// @flow
import * as React from "react";

import Radio from "../index";

export default {
  Example: (): React.Node => {
    const ref: {| current: React.ElementRef<any> |} = React.useRef(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return <Radio label="Allow notifications" ref={ref} />;
  },
  info: {
    title: "References",
    description: "For actions like automatically focusing on a radio, use the ref prop.",
  },
};
