// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/SkipLink";

interface Action {
  readonly name: string;
  readonly href?: string;
  readonly onClick?: () => {};
}

interface Props {
  readonly links: Action[];
  readonly buttonLabel?: string;
}

declare const SkipLink: React.FunctionComponent<Props>;
export { SkipLink, SkipLink as default };
