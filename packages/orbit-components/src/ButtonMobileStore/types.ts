// @noflow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export type Type = "appStore" | "googlePlay";
export interface Props extends Common.Globals {
  readonly type?: Type;
  readonly stopPropagation?: boolean;
  readonly href?: string;
  readonly alt?: string;
  readonly lang?: string;
  readonly onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
