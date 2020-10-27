// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/Mobile";

export interface Props {
  readonly children: React.ReactNode;
}

declare const Mobile: React.FunctionComponent<Props>;
export { Mobile, Mobile as default };
