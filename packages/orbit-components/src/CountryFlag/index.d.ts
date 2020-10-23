// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/CountryFlag";

export interface Props extends Common.Global {
  readonly code?: string | null;
  readonly name?: string;
  readonly size?: "small" | "medium";
}

declare const CountryFlag: React.FunctionComponent<Props>;
export { CountryFlag, CountryFlag as default };
