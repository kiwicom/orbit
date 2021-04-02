// @flow
import * as React from "react";

import ButtonPrimitive from "../index";

export default {
  Example: (): React.Node => <ButtonPrimitive>Click me</ButtonPrimitive>,
  info: {
    title: "Default button primitive",
    description:
      "The default button primitive appears as a &lt;button&gt; with other traits inherited or as the browser default.",
  },
};
