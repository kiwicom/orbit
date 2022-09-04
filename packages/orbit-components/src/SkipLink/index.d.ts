// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Action {
  readonly name: string;
  readonly href?: string;
  readonly onClick?: Common.Event<React.SyntheticEvent<HTMLAnchorElement>>;
}

export interface Props {
  readonly links: Action[];
  readonly buttonLabel?: string;
}

declare const SkipLink: React.FunctionComponent<Props>;
export { SkipLink, SkipLink as default };
