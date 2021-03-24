import * as React from "react";
import { Checkbox, Tooltip } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Checkbox
      label="Direct"
      disabled
      tooltip={
        <Tooltip content="No results for direct connections" preferredPosition="top">
          children
        </Tooltip>
      }
    />
  ),
  info: {
    title: "Tooltip",
    description:
      "If you want to attach a tooltip only to the checkbox itself and not the label or any other text, use the tooltip prop.",
  },
};
