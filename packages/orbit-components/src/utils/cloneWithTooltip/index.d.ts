import * as React from "react";

declare const CloneWithTooltip: (
  tooltip: React.ReactElement<unknown> | undefined | null,
  children: React.ReactElement<unknown>,
) => React.ReactElement<unknown>;

export { CloneWithTooltip, CloneWithTooltip as default };
