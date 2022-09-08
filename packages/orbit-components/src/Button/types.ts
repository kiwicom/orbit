// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import { ButtonCommonProps, Size } from "../primitives/ButtonPrimitive/types";

export type Type =
  | "primary"
  | "secondary"
  | "critical"
  | "primarySubtle"
  | "criticalSubtle"
  | "white"
  | "bundleBasic"
  | "bundleMedium"
  | "bundleTop";

export type ButtonStates = "default" | "hover" | "active" | "focus";

export interface Props extends ButtonCommonProps {
  readonly type?: Type;
  readonly size?: Size;
}
