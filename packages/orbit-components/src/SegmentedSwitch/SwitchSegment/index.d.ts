// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import { Option, Props as Properties } from "..";

export interface Props extends Option {
  readonly onChange: Properties["onChange"];
  readonly onFocus?: Properties["onFocus"];
  readonly setTooltipShown: (shown: boolean) => void;
}

declare const SwitchSegment: React.FunctionComponent<Props>;

export default SwitchSegment;
