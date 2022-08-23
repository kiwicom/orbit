import * as React from "react";

import type { Popper, Size } from "../index.d";
import * as Common from "../../../common/common";

export interface Props extends Common.Globals, Popper {
  shown: boolean;
  size: Size;
  tooltipId: string;
  children: React.ReactNode;
  parent: React.ReactNode;
  error?: boolean;
  help?: boolean;
  onClose: () => void;
  onCloseMobile: () => void;
  onEnter: () => void;
  referenceElement: HTMLElement | null;
}

declare const TooltipContent: React.FunctionComponent<Props>;
export { TooltipContent, TooltipContent as default };
