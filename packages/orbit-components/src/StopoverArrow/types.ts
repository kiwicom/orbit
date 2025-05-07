// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as Common from "../common/types";

type Stops = "0" | "1" | "2" | "3";

export interface Props extends Common.Globals {
  readonly stops: Stops;
}
