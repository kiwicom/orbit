// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

export interface Props {
  readonly onClick?: Common.Callback;
}

declare const DrawerClose: React.ForwardRefRenderFunction<HTMLButtonElement, Props>;
export { DrawerClose, DrawerClose as default };
