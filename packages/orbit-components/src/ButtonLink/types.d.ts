// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as Common from "../common/types";
import type { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/types";

export type Type = "primary" | "secondary" | "critical";

export interface Props extends Common.Globals, Common.SpaceAfter, ButtonCommonProps {
  readonly compact?: boolean;
  readonly type?: Type;
  readonly size?: Size;
}
