// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import React from "react";

import * as Common from "../common/common";
import { Dimensions as PositionRaw } from "../utils/boundingClientRect";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly id?: string;
  readonly error?: React.ReactNode;
  readonly help?: React.ReactNode;
  readonly tooltipShown?: boolean;
  readonly inputRef?: Common.Ref;
  readonly labelRef?: Common.Ref;
  readonly iconRef?: Common.Ref;
  readonly inlineLabel?: boolean;
}

export interface Dimensions {
  readonly set: boolean;
  readonly labelRef: PositionRaw;
  readonly iconRef: PositionRaw;
}

declare const ErrorFormTooltip: React.FC<Props>;
export { ErrorFormTooltip, ErrorFormTooltip as default };
