// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Seat";

type Size = "medium" | "small";
type Type = "default" | "legroom" | "selected" | "unavailable";

interface Props extends Common.Global {
  readonly type: Type;
  readonly size?: Size;
}

declare const Seat: React.FunctionComponent<Props>;
export { Seat, Seat as default };
