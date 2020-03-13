// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/SkipLink";

export { SkipLink, SkipLink as default };

declare namespace SkipLink {
  interface Action {
    readonly name: string;
    readonly href?: string;
    readonly onClick?: () => {};
  }

  interface Props {
    readonly links: Action[];
    readonly description?: string;
  }
}

declare class SkipLink extends React.Component<SkipLink.Props> {}
