// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../../common/types";
import type { Devices } from "../../utils/mediaQuery/types";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
  readonly as?: string;
  readonly hideOn?: Devices[];
  readonly spanEntireRow?: boolean;
}
