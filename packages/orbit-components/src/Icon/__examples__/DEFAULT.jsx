// @flow
import * as React from "react";

import * as Icons from "../../icons";

export default {
  Example: (): React.Node => <Icons.Airplane ariaLabel="Airplane" />,
  info: {
    title: "Default icon",
    description: "By default, icons are primary unless they inherit a different color.",
  },
};
