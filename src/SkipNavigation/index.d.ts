// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/SkipNavigation";

export { SkipNavigation, SkipNavigation as default };

declare namespace SkipNavigation {
  interface Action {
    readonly name?: string;
    readonly link?: string;
    readonly onClick?: () => {};
  }

  interface Props {
    readonly actions?: Action[];
    readonly feedbackUrl?: string;
  }
}

declare class SkipNavigation extends React.Component<SkipNavigation.Props> {}
