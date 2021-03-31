// @flow
import * as React from "react";

import Text from "../index";

export default {
  Example: (): React.Node => (
    <Text>Orbit is an open source design system for your next travel project.</Text>
  ),
  info: {
    title: "Default text",
    description:
      "By default, Text components render their children in <p> tags with the proper font family and styling applied.",
  },
};
