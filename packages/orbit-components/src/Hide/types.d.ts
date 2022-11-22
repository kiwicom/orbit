// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

type Device =
  | "largeDesktop"
  | "desktop"
  | "tablet"
  | "largeMobile"
  | "mediumMobile"
  | "smallMobile";

export interface Props {
  readonly children: React.ReactNode;
  readonly on: Device[];
  readonly block?: boolean;
}
