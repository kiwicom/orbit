// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/SkipNavigation";

interface Action {
  readonly name?: string;
  readonly link?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly onClick?: () => {};
}

interface Props {
  readonly actions?: Action[];
  readonly feedbackUrl?: string;
}

declare const SkipNavigation: React.FunctionComponent<Props>;
export { SkipNavigation, SkipNavigation as default };
