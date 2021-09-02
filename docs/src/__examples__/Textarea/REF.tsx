import React from "react";
import { Textarea } from "@kiwicom/orbit-components";

export default {
  Example: () => {
    const ref = React.useRef<HTMLTextAreaElement | null>(null);

    React.useEffect(() => {
      if (ref.current) {
        ref.current.focus();
      }
    });
    return <Textarea label="Given names" placeholder="Sofia Cruz" ref={ref} />;
  },
  info: {
    title: "References",
    description: "For actions like automatically focusing on the text area, use the ref prop.",
  },
};
