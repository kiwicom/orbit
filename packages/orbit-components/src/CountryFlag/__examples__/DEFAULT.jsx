// @flow
import * as React from "react";

import CountryFlag from "../index";

export default {
  Example: (): React.Node => <CountryFlag />,
  info: {
    title: "Default country flag",
    description:
      "By default, the country flag component presents a generic flag with the title 'anywhere' to prompt users to make an actual selection.",
  },
};
