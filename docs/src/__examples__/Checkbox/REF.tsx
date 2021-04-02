import * as React from "react";
import { Checkbox } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const ref = React.useRef<null | HTMLElement>(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return <Checkbox label="Allow notifications" ref={ref} />;
  },
  info: {
    title: "References",
    description: "For actions like automatically focusing on a checkbox, use the ref prop.",
  },
};
