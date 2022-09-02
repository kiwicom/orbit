// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/common";

type Sizes = "extraSmall" | "small" | "medium" | "large" | "display";

export interface Props extends Common.Globals {
  readonly size?: Sizes;
  readonly title?: string;
  readonly description?: string;
  readonly primary?: string;
  readonly secondary?: string;
  readonly ariaLabelledby?: string;
}

declare const SmartPassIllustration: React.FunctionComponent<Props>;

export declare const SmartPassV1: typeof SmartPassIllustration;
export declare const SmartPassV2: typeof SmartPassIllustration;
export declare const SmartPassV3: typeof SmartPassIllustration;
export declare const SmartPassV4: typeof SmartPassIllustration;
export declare const SmartPassV5: typeof SmartPassIllustration;
