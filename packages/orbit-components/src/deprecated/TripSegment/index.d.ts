// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/TripSegment";

interface Props extends Common.Global {
  readonly children: React.ReactNode;
  readonly carrier: Common.Carrier;
  readonly departure: Common.Translation;
  readonly departureTime: Common.Translation;
  readonly arrival: Common.Translation;
  readonly arrivalTime: Common.Translation;
  readonly duration: Common.Translation;
  readonly initialExpanded?: boolean;
  readonly tabIndex?: string | number;
  readonly onClick?: Common.Callback;
}

interface State {
  expanded: boolean;
  contentHeight: number;
  initialExpanded: boolean;
}
declare class TripSegment extends React.Component<Props, State> {}
export { TripSegment, TripSegment as default };
