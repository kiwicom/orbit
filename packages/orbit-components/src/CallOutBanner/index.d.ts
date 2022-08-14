// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";
import Illustration from "../Illustration";

export interface Props extends Common.Globals {
  readonly tabIndex?: number;
  readonly onClick?: Common.Callback;
  readonly title: Common.Translation;
  readonly description?: Common.Translation;
  readonly illustration?: React.ReactElement<typeof Illustration>;
  readonly actions?: React.ReactNode;
  readonly children?: React.ReactNode;
}

declare const CallOutBanner: React.FunctionComponent<Props>;
export { CallOutBanner, CallOutBanner as default };
