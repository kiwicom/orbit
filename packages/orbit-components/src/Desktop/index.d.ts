// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Globals {
  readonly children: React.ReactNode;
}

declare const Desktop: React.FunctionComponent<Props>;
export { Desktop, Desktop as default };
