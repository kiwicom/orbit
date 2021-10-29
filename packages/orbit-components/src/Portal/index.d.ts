// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

export interface Props {
  readonly renderInto?: string;
  readonly children: React.ReactNode;
}

declare const Portal: React.FunctionComponent<Props>;
export { Portal, Portal as default };
