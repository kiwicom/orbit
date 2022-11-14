// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as Common from "../common/types";

export type Size = "small" | "medium";

export interface Props extends Common.Globals {
  readonly code?: string;
  readonly name?: string;
  readonly size?: Size;
}
