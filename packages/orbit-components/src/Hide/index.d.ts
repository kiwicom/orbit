// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/Hide";

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

declare const Hide: React.FunctionComponent<Props>;
export { Hide, Hide as default };
