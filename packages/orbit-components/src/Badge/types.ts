// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import type * as React from "react";

import type { Carrier } from "../CarrierLogo/types";
import type * as Common from "../common/types";

export type Type =
  | "neutral"
  | "dark"
  | "info"
  | "success"
  | "warning"
  | "critical"
  | "white"
  | "infoInverted"
  | "criticalInverted"
  | "successInverted"
  | "warningInverted"
  | "bundleBasic"
  | "bundleMedium"
  | "bundleTop";

export interface Props extends Common.Globals {
  readonly children?: React.ReactNode;
  readonly type?: Type;
  readonly border?: boolean;
  readonly carriers?: Carrier[];
  readonly icon?: React.ReactNode;
  readonly ariaLabel?: string;
}
