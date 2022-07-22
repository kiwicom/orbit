// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import React from "react";

import { Carrier } from "../CarrierLogo/types";
import * as Common from "../common/types";

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
