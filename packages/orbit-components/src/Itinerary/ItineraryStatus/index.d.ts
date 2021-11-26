import React from "react";

import Common from "../../common/common";

export type Status = "warning" | "critical" | "info" | "success";

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

declare const ItineraryPartStatuses: React.FunctionComponent<Props>;
export default ItineraryPartStatuses;
