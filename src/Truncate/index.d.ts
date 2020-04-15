// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Truncate";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly maxWidth?: string;
}

const Truncate: React.FunctionComponent<Props>;
export { Truncate, Truncate as default };
