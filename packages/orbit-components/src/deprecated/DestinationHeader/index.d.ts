// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../../common/common";

declare module "@kiwicom/orbit-components/lib/DestinationHeader";

interface Props extends Common.Global {
  readonly destinationName: Common.Translation;
  readonly image: string;
  readonly goBack?: Common.Callback;
}
declare const DestinationHeader: React.FunctionComponent<Props>;
export { DestinationHeader, DestinationHeader as default };
