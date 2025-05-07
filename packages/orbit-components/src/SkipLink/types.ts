// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface Action {
  readonly name: string;
  readonly href?: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLAnchorElement>>;
}

export interface Props extends Common.Globals {
  readonly links: Action[];
  readonly buttonLabel?: string;
}
