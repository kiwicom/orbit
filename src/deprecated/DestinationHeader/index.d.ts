// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/DestinationHeader";

interface Props extends Common.Global {
  readonly destinationName: Common.Translation;
  readonly image: string;
  readonly goBack?: Common.Callback;
}
const DestinationHeader: React.FunctionComponent<Props>;
export { DestinationHeader, DestinationHeader as default };
