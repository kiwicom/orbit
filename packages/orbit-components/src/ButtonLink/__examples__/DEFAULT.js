// @flow
import * as React from "react";

import ButtonLink from "../index";

export default {
  Example: (): React.Node => <ButtonLink>Click me</ButtonLink>,
  info: {
    title: "Default button link",
    description: "The default button link is a primary button link with its children as its text.",
  },
};
