import type * as React from "react";

import type { Size } from "../types";
import type { Placement } from "../../../common/placements";
import type * as Common from "../../../common/types";

export interface Props extends Common.Globals {
  shown: boolean;
  size: Size;
  tooltipId: string;
  children: React.ReactNode;
  parent: React.ReactNode;
  error?: boolean;
  help?: boolean;
  onClose: () => void;
  onEnter: () => void;
  referenceElement: HTMLElement | null;
  placement?: Placement;
  noFlip?: boolean;
  offset?: [number, number];
}
