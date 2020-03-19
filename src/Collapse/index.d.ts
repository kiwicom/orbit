// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common/common.d.ts";

declare module "@kiwicom/orbit-components/lib/Collapse";

export interface Props extends Common.Global {
  readonly initialExpanded?: boolean;
  readonly expanded?: boolean;
  readonly label: Common.Translation;
  readonly children: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly onClick?: (
    e: React.SyntheticEvent<HTMLDivElement>,
    state: boolean,
  ) => void | Promise<void>;
}

const ClickOutside: React.FunctionComponent<Props>;
export { ClickOutside, ClickOutside as default };
