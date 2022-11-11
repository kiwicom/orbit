// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

export type Type = "primary" | "secondary" | "separated";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly children: React.ReactNode;
  readonly size?: Common.Size;
  readonly type?: Type;
}
