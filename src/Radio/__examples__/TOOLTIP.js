// @flow
import * as React from "react";

import Radio from "../index";
import Tooltip from "../../Tooltip";

export default {
  Example: () => (
    <Radio
      label="Direct connections"
      disabled
      tooltip={<Tooltip content="No results for direct connections" preferredPosition="top" />}
    />
  ),
  info: {
    title: "Tooltip",
    description:
      "If you want to attach a tooltip only to the radio itself and not the label or any other text, use the tooltip prop.",
  },
};
