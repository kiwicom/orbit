// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/deprecated/TileExpandalbe";

interface Props {
  readonly expanded?: boolean;
  readonly initialExpanded?: boolean;
  readonly children: React.ReactNode;
}

declare const TileExpandalbe: React.FunctionComponent<Props>;
export { TileExpandalbe, TileExpandalbe as default };
