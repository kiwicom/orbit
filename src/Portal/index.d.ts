// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Portal";

export interface Props {
  readonly renderInto?: string;
  readonly children: React.ReactNode;
}

const Portal: React.FunctionComponent<Props>;
export { Portal, Portal as default };
