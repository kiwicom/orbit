// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global {
  readonly code?: string;
  readonly name?: string;
  readonly size?: "small" | "medium";
}

declare const CountryFlag: React.FunctionComponent<Props>;
export { CountryFlag, CountryFlag as default };
