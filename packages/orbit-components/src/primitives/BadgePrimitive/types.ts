// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type { Carrier } from "../../CarrierLogo/types";
import type * as Common from "../../common/types";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly carriers?: Carrier[];
  readonly ariaLabel?: string;
  readonly background?: string | undefined | null;
  readonly foregroundColor?: string | undefined | null;
  readonly borderColor?: string | undefined | null;
}
