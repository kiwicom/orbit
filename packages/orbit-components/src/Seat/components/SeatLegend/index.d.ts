// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../../common/common";

type Type = "default" | "legroom" | "unavailable";

export interface Props extends Common.Globals {
  readonly type: Type;
  readonly label?: React.ReactNode;
}

declare const SeatLegend: React.FunctionComponent<Props>;

export default SeatLegend;
