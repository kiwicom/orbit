// @flow
import * as React from "react";

import Alert from "../index";

export default {
  Example: (): React.Node => <Alert icon title="You've got mail" />,
  info: {
    title: "Default Alert",
    description:
      "The recommended default use for an Alert is to have an icon and a title no longer than one line. To use a different icon, pass it as a React element to the icon prop.",
  },
};
