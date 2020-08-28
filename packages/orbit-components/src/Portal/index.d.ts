// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/Portal";

export interface Props {
  readonly renderInto?: string;
  readonly children: React.ReactNode;
}

declare const Portal: React.FunctionComponent<Props>;
export { Portal, Portal as default };
