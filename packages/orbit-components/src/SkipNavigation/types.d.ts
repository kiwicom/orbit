// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

interface Action {
  readonly name?: string;
  readonly link?: string;
  readonly onClick?: (ev?: React.SyntheticEvent<HTMLButtonElement>) => void;
}

export interface Props {
  readonly actions?: Action[];
  readonly feedbackUrl?: string;
  readonly firstSectionLabel?: React.ReactNode;
  readonly firstActionLabel?: React.ReactNode;
  readonly feedbackLabel?: React.ReactNode;
}

export interface MappedOptions {
  readonly key?: string;
  readonly value: string | number;
  readonly label?: React.ReactNode;
  readonly disabled?: boolean;
}
