// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/DestinationCard";

interface Props extends Common.Global {
  readonly departureCity: Common.Translation;
  readonly destinationCity: Common.Translation;
  readonly destinationCountry: Common.Translation;
  readonly image: string;
  readonly price: Common.Translation;
  readonly timeOfStay?: Common.Translation;
  readonly height?: number;
  readonly tabIndex?: string;
  readonly outbound: {
    readonly text?: Common.Translation;
    readonly date?: Common.Translation;
    readonly type: Common.Translation;
    readonly duration: Common.Translation;
  };
  readonly inbound?: {
    readonly date: Common.Translation;
    readonly type: Common.Translation;
    readonly duration: Common.Translation;
  };
  readonly onClick?: () => void;
}

interface State {
  hiddenContentHeight: number;
}
// eslint-disable-next-line react/prefer-stateless-function
declare class DestinationCard extends React.Component<Props, State> {}
export { DestinationCard, DestinationCard as default };
