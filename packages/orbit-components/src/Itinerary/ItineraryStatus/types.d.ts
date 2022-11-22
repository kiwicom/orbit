import type * as React from "react";

import type * as Common from "../../common/types";

export type Status = "warning" | "critical" | "info" | "success" | "neutral";

export interface Props extends Common.SpaceAfter {
  /** Type of the status  */
  readonly type: Status;
  /** Label of the status */
  readonly label?: React.ReactNode;
  /** Offset for the label text */
  /** default: 0 */
  readonly offset?: number;
  /** Content of the status */
  readonly children: React.ReactNode;
}
