// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly maxWidth?: string;
}

declare const Truncate: React.FunctionComponent<Props>;
export { Truncate, Truncate as default };
