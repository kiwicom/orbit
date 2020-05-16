// @flow
import * as React from "react";

import Alert from "../index";

export default {
  Example: () => <Alert icon title="The quick, brown fox jumps over a lazy dog." />,
  info: {
    title: "Default Alert",
    description:
      "The default usage for Alert component is with an icon and title that should be longer than one line.",
  },
};
