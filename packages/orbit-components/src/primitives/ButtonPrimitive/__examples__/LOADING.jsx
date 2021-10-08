// @flow
import * as React from "react";

import Button from "../index";

export default {
  Example: (): React.Node => <Button loading>Click me</Button>,
  info: {
    title: "Loading button",
    description:
      "Loading buttons are useful when content needs to be loaded before the user can take an action.",
  },
};
