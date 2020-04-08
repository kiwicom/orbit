// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/DrawerClose";

export interface Props {
  readonly onClick?: Common.Callback;
}

const DrawerClose: React.FunctionComponent<Props>;
export { DrawerClose, DrawerClose as default };
