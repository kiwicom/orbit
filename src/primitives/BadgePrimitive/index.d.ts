// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/BadgePrimitive";

export interface Props extends Common.Global {
  readonly children?: React.ReactNode;
  readonly icon?: React.ReactNode;
  readonly ariaLabel?: string;
  readonly background?: string | undefined | null;
  readonly foregroundColor?: string | undefined | null;
  readonly borderColor?: string | undefined | null;
}

const BadgePrimitive: React.FunctionComponent<Props>;
export { BadgePrimitive, BadgePrimitive as default };
