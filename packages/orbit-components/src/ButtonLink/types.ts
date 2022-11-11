// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";
import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/types";

export type Type = "primary" | "secondary" | "critical";

export interface Props extends Common.Globals, Common.Ref, Common.SpaceAfter, ButtonCommonProps {
  readonly compact?: boolean;
  readonly type?: Type;
  readonly size?: Size;
}

declare const ButtonLink: React.FunctionComponent<Props>;
export { ButtonLink, ButtonLink as default };
