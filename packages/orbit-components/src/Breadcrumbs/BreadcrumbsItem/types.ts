// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/types";

export interface Props extends Common.Globals {
  readonly active?: boolean;
  readonly component?: Common.Component;
  readonly children: React.ReactNode;
  readonly href?: string;
  readonly id?: string;
  readonly contentKey?: number;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLLinkElement>>;
}
