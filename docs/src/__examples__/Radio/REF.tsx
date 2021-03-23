import * as React from "react";
import { Radio } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const ref = React.useRef<HTMLElement | null>(null);

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
