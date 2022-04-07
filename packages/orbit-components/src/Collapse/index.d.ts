// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/common";

export interface Props extends Common.Global {
  readonly initialExpanded?: boolean;
  readonly expanded?: boolean;
  readonly label?: Common.Translation;
  readonly children: React.ReactNode;
  readonly actions?: React.ReactNode;
  readonly customLabel?: React.ReactNode;
  readonly onClick?: (
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    e: React.SyntheticEvent<HTMLDivElement>,
    state: boolean,
  ) => void | Promise<void>;
}

declare const Collapse: React.FunctionComponent<Props>;
export { Collapse, Collapse as default };
