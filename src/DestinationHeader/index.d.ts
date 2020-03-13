// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";
import * as Common from "@kiwicom/orbit-components/common";

declare module "@kiwicom/orbit-components/lib/DestinationHeader";

export { DestinationHeader, DestinationHeader as default };

declare namespace DestinationHeader {
  interface Props extends Common.Global {
    readonly destinationName: Common.Translation;
    readonly image: string;
    readonly goBack?: Common.Callback;
  }
}

declare class DestinationHeader extends React.Component<DestinationHeader.Props> {}
