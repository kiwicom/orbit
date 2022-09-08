// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import React from "react";

import * as Common from "../../common/types";

export type Size = "extraSmall" | "small" | "medium" | "large" | "display";

export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly size?: Size;
  readonly name: string;
  readonly alt?: string;
}
