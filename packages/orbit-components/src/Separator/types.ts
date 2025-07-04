// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type { ReactNode } from "react";

import type * as Common from "../common/types";

export type SideOffset = "none" | "300" | "400" | "600" | "800" | "1000";
export type Align = "left" | "center" | "right";

export type BorderColorClass =
  | "border-blue-light"
  | "border-blue-light-hover"
  | "border-blue-light-active"
  | "border-blue-normal"
  | "border-blue-normal-hover"
  | "border-blue-normal-active"
  | "border-blue-dark"
  | "border-blue-dark-hover"
  | "border-blue-dark-active"
  | "border-blue-darker"
  | "border-bundle-basic"
  | "border-bundle-medium"
  | "border-cloud-light"
  | "border-cloud-light-hover"
  | "border-cloud-light-active"
  | "border-cloud-normal"
  | "border-cloud-normal-hover"
  | "border-cloud-normal-active"
  | "border-cloud-dark"
  | "border-cloud-dark-hover"
  | "border-cloud-dark-active"
  | "border-green-light"
  | "border-green-light-hover"
  | "border-green-light-active"
  | "border-green-normal"
  | "border-green-normal-hover"
  | "border-green-normal-active"
  | "border-green-dark"
  | "border-green-dark-hover"
  | "border-green-dark-active"
  | "border-green-darker"
  | "border-ink-dark"
  | "border-ink-dark-hover"
  | "border-ink-dark-active"
  | "border-ink-light"
  | "border-ink-light-hover"
  | "border-ink-light-active"
  | "border-ink-normal"
  | "border-ink-normal-hover"
  | "border-ink-normal-active"
  | "border-orange-light"
  | "border-orange-light-hover"
  | "border-orange-light-active"
  | "border-orange-normal"
  | "border-orange-normal-hover"
  | "border-orange-normal-active"
  | "border-orange-dark"
  | "border-orange-dark-hover"
  | "border-orange-dark-active"
  | "border-orange-darker"
  | "border-product-light"
  | "border-product-light-hover"
  | "border-product-light-active"
  | "border-product-normal"
  | "border-product-normal-hover"
  | "border-product-normal-active"
  | "border-product-dark"
  | "border-product-dark-hover"
  | "border-product-dark-active"
  | "border-product-darker"
  | "border-red-light"
  | "border-red-light-hover"
  | "border-red-light-active"
  | "border-red-normal"
  | "border-red-normal-hover"
  | "border-red-normal-active"
  | "border-red-dark"
  | "border-red-dark-hover"
  | "border-red-dark-active"
  | "border-red-darker"
  | "border-social-facebook"
  | "border-social-facebook-hover"
  | "border-social-facebook-active"
  | "border-white"
  | "border-white-normal"
  | "border-white-hover"
  | "border-white-active";

export interface Props extends Common.SpaceAfter {
  readonly sideOffset?: SideOffset;
  readonly align?: Align;
  readonly color?: BorderColorClass;
  readonly type?: "solid" | "dashed" | "dotted" | "double" | "none";
  readonly label?: ReactNode;
  readonly ariaHidden?: boolean;
}
