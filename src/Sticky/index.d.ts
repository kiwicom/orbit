// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/Sticky";

interface Props {
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
// eslint-disable-next-line react/prefer-stateless-function
declare class Sticky extends React.Component<Props, State> {}
export { Sticky, Sticky as default };
