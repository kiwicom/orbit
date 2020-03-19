// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Desktop";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

const Desktop: React.FunctionComponent<Props>;
export { Desktop, Desktop as default };
