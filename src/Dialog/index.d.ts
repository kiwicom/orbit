// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Dialog";

export interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

const Dialog: React.FunctionComponent<Props>;
export { Dialog, Dialog as default };
