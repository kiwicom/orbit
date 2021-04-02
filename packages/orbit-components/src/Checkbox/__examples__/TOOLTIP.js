// @flow
import * as React from "react";

import Checkbox from "../index";
import Tooltip from "../../Tooltip";

export default {
  Example: (): React.Node => (
    <Checkbox
      label="Direct"
      disabled
      tooltip={<Tooltip content="No results for direct connections" preferredPosition="top" />}
    />
  ),
  info: {
    title: "Tooltip",
    description:
      "If you want to attach a tooltip only to the checkbox itself and not the label or any other text, use the tooltip prop.",
  },
};
