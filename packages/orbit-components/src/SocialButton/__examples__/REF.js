// @flow
import * as React from "react";

import SocialButton from "../index";

export default {
  Example: (): React.Node => {
    const ref = React.useRef(null);
    return (
      <SocialButton ref={ref} href="https://reactjs.org/docs/refs-and-the-dom.html" external>
        Read more
      </SocialButton>
    );
  },
  info: {
    title: "Refs",
    description:
      "See how to implement refs with buttons. Click the button to read more about when and how to use refs.",
  },
};
