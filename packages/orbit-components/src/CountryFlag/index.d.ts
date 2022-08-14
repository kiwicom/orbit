// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export type Size = "small" | "medium";

export interface Props extends Common.Globals {
  readonly code?: string;
  readonly name?: string;
  readonly size?: Size;
}

declare const CountryFlag: React.FunctionComponent<Props>;
export { CountryFlag, CountryFlag as default };
