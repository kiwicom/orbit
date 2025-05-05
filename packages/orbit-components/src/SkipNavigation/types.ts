// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

interface Action {
  readonly name?: string;
  readonly link?: string;
  readonly onClick?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export interface Props extends Common.Globals {
  readonly actions?: Action[];
  readonly feedbackUrl?: string;
  readonly firstSectionLabel?: string;
  readonly firstActionLabel?: string;
  readonly feedbackLabel?: string;
  readonly isInNav?: boolean;
}

export interface MappedOptions {
  readonly key?: string;
  readonly value: string | number;
  readonly label?: string;
  readonly disabled?: boolean;
}
