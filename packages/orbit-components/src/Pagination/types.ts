// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as Common from "../common/types";

export type OnPageChange = (page: number) => void;
export interface Props extends Common.Globals {
  readonly onPageChange: OnPageChange;
  readonly pageCount: number;
  readonly selectedPage?: number;
  readonly hideLabels?: boolean;
  readonly size?: Common.InputSize;
}
