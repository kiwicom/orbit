// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/SkipLink";

interface Action {
  readonly name: string;
  readonly href?: string;
  readonly onClick?: () => {};
}

interface Props {
  readonly links: Action[];
  readonly description?: string;
}

const SkipLink: React.FunctionComponent<Props>;
export { SkipLink, SkipLink as default };
