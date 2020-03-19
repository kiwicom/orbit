// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/CountryFlag";

export interface Props extends Common.Global {
  readonly code?: string | null;
  readonly name?: string;
  readonly size?: "small" | "medium";
}

const CountryFlag: React.FunctionComponent<Props>;
export { CountryFlag, CountryFlag as default };
