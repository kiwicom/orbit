// @flow
import * as React from "react";

import Alert from "../index";

export default {
  Example: () => <Alert icon title="You're got mail" />,
  info: {
    title: "Default Alert",
    description:
      "The recommend default use for an Alert is to have an icon and a title no longer than one line.",
  },
};
