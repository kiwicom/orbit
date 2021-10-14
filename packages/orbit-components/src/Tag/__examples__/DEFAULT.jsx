// @flow
import * as React from "react";

import Tag from "../index";

export default {
  Example: (): React.Node => <Tag>Bags</Tag>,
  info: {
    title: "Default tag",
    description: "By default, tags are not selected and cannot be removed.",
  },
};
