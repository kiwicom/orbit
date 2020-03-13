// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/Hide";

export { Hide, Hide as default };

declare namespace Hide {
  type Device =
    | "largeDesktop"
    | "desktop"
    | "tablet"
    | "largeMobile"
    | "mediumMobile"
    | "smallMobile";

  interface Props {
    readonly children: React.ReactNode;
    readonly on: Device[];
    readonly block?: boolean;
  }
}

declare class Hide extends React.Component<Hide.Props> {}
