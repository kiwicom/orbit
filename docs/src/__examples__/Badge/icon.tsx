import React from "react";
import { Badge, Tooltip } from "@kiwicom/orbit-components";
import { InformationCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <Tooltip
      renderInPortal={false}
      content="Get more points by traveling more"
      placement="top-right"
    >
      <Badge type="neutral">
        2,435 pts <InformationCircle size="small" ariaLabel="More information" />
      </Badge>
    </Tooltip>
  ),
};
