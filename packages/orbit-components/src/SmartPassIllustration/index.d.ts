// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/SmartPassIllustration";

type Names = "v1" | "v2" | "v3" | "v4" | "v5";

export interface Props extends Common.Global {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Names;
  readonly alt?: string;
  readonly title?: string;
  readonly desciption?: string;
  readonly primary?: string;
  readonly secondary?: string;
  readonly ariaLabelledby?: string;
}

declare const SmartPassIllustration: React.FunctionComponent<Props>;

export { SmartPassIllustration, SmartPassIllustration as default };
