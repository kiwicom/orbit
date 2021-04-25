import * as React from "react";
import { InputField } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const ref = React.useRef<HTMLInputElement | null>(null);

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
