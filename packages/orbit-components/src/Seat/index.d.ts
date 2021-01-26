// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Seat";

type Size = "extraSmall" | "small" | "medium";
type Type = "default" | "legroom" | "selected" | "unavailable";

interface Props extends Common.Global {
  readonly type: Type;
  readonly size?: Size;
  readonly title?: string;
  readonly description?: string;
  readonly selected?: boolean;
  readonly label?: React.ReactNode;
  readonly price?: React.ReactNode;
}

declare const Seat: React.FunctionComponent<Props>;
export { Seat, Seat as default };
