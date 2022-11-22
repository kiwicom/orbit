import type * as React from "react";

import type { Popper, Size } from "../types";
import type * as Common from "../../../common/types";

export interface Props extends Common.Globals, Popper {
  shown: boolean;
  size: Size;
  tooltipId: string;
  children: React.ReactNode;
  parent: React.ReactNode;
  error?: boolean;
  help?: boolean;
  onClose: () => void;
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
  onCloseMobile: () => void;
  onEnter: () => void;
  referenceElement: HTMLElement | null;
}
