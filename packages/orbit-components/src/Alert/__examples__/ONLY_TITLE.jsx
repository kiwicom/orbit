// @flow
import * as React from "react";

import Alert from "../index";

export default {
  Example: (): React.Node => <Alert title="You've got mail" />,
  info: {
    title: "Alert with only a title",
    description: "If you have a short, clear message, use an alert with only a title.",
  },
};
