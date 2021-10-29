// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

declare const ButtonGroup: React.FunctionComponent<Props>;
export { ButtonGroup, ButtonGroup as default };
