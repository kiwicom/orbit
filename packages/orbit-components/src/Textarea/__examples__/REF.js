// @flow
import * as React from "react";

import Textarea from "../index";

export default {
  Example: (): React.Node => {
    const ref: {| current: React.ElementRef<any> |} = React.useRef(null);

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
