// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../../common/common";

type Type = "default" | "legroom" | "unavailable";

interface Props extends Common.Global {
  readonly type: Type;
  readonly label?: React.ReactNode;
}

declare const SeatLegend: React.FunctionComponent<Props>;
export { SeatLegend, SeatLegend as default };
