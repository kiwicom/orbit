// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type React from "react";

import type * as Common from "../../common/types";

export type Size = "extraSmall" | "small" | "medium" | "large" | "display";

// Interface content is fetched from /src/Illustration/TYPESCRIPT_TEMPLATE.template
export interface Props extends Common.Globals, Common.SpaceAfter {
  readonly size?: Size;
  readonly name: string;
  readonly margin?: React.CSSProperties["margin"] | Common.ObjectProperty;
  readonly alt?: string;
  readonly role?: "img" | "presentation";
}
