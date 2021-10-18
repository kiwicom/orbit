// @flow
import * as React from "react";

import Button from "../index";

export default {
  Example: (): React.Node => <Button>Click me</Button>,
  info: {
    title: "Default button",
    description: "The default button is a primary button with its children as its text.",
  },
};
