import React from "react";
import { Badge, OrbitProvider, Tooltip, defaultTheme } from "@kiwicom/orbit-components";
import { InformationCircle } from "@kiwicom/orbit-components/icons";

export default {
  Example: () => (
    <OrbitProvider theme={defaultTheme}>
      <Tooltip renderInPortal={false} content="Get more points by traveling more">
        <Badge type="neutral">
          2,435 pts <InformationCircle size="small" ariaLabel="More information" />
        </Badge>
      </Tooltip>
    </OrbitProvider>
  ),
};
