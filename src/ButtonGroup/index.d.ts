// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/ButtonGroup";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

const ButtonGroup: React.FunctionComponent<Props>;
export { ButtonGroup, ButtonGroup as default };
