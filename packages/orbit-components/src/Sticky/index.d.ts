// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Props extends Common.Global {
  readonly offset?: number;
  readonly children: React.ReactNode;
}

interface State {
  sticky: boolean;
  height: number;
  width: number;
  initialTop: number;
  initialWidth: boolean;
}
declare class Sticky extends React.Component<Props, State> {}
export { Sticky, Sticky as default };
