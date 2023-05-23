// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

export type OnPageChange = (page: number) => void;
export interface Props extends Common.Globals {
  readonly onPageChange: OnPageChange;
  readonly labelPrev: string;
  readonly labelNext: string;
  readonly labelProgress: React.ReactNode;
  readonly pageCount: number;
  readonly selectedPage?: number;
  readonly hideLabels?: boolean;
  readonly size?: Common.InputSize;
}
