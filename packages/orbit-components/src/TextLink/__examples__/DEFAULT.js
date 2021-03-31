// @flow
import * as React from "react";

import TextLink from "../index";

export default {
  Example: (): React.Node => <TextLink href="https://orbit.kiwi">Orbit design system</TextLink>,
  info: {
    title: "Default text link",
    description:
      "The default text link is a primary link with its children as its text that inherits its size from its parent.",
  },
};
