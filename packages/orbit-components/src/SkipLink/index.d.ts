// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/SkipLink";

interface Action {
  readonly name: string;
  readonly href?: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  readonly onClick?: {} | Common.Event<React.SyntheticEvent<HTMLButtonElement>>;
}

interface Props {
  readonly links: Action[];
  readonly buttonLabel?: string;
}

declare const SkipLink: React.FunctionComponent<Props>;
export { SkipLink, SkipLink as default };
