// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
}

declare const TileGroup: React.FunctionComponent<Props>;
export { TileGroup, TileGroup as default };
