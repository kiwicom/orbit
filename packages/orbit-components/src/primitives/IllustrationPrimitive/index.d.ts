// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: string;
  readonly alt?: string;
}

declare const IllustrationPrimitive: React.FunctionComponent<Props>;
export { IllustrationPrimitive, IllustrationPrimitive as default };
