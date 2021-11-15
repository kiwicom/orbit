// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Carrier } from "../../CarrierLogo";
import * as Common from "../../common/common";

export interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly carriers?: Carrier[];
  readonly ariaLabel?: string;
  readonly background?: string | undefined | null;
  readonly foregroundColor?: string | undefined | null;
  readonly borderColor?: string | undefined | null;
}

declare const BadgePrimitive: React.FunctionComponent<Props>;
export { BadgePrimitive, BadgePrimitive as default };
