// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/SkipNavigation";

interface Action {
  readonly name?: string;
  readonly link?: string;
  readonly onClick?: () => {};
}

interface Props {
  readonly actions?: Action[];
  readonly feedbackUrl?: string;
}

const SkipNavigation: React.FunctionComponent<Props>;
export { SkipNavigation, SkipNavigation as default };
