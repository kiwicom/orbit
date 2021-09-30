// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

interface Action {
  readonly name?: string;
  readonly link?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly onClick?: {} | Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
}

interface Props {
  readonly actions?: Action[];
  readonly feedbackUrl?: string;
}

declare const SkipNavigation: React.FunctionComponent<Props>;
export { SkipNavigation, SkipNavigation as default };
