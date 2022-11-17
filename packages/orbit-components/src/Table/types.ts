// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export interface SharedProps extends Common.Globals {
  readonly children: React.ReactNode;
}

export type Type = "primary" | "secondary";

export interface Props extends SharedProps {
  readonly type?: Type;
  readonly striped?: boolean;
  readonly compact?: boolean;
}
