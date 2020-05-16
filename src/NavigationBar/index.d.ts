// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components
import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/NavigationBar";

export interface Props extends Common.Global {
  readonly onMenuOpen?: Common.Callback;
  readonly onShow?: Common.Callback;
  readonly onHide?: Common.Callback;
  readonly children: React.ReactNode;
}

declare const NavigationBar: React.FunctionComponent<Props>;
export { NavigationBar, NavigationBar as default };
