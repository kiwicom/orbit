// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

type Size = "extraSmall" | "small" | "normal" | "large" | "extraLarge";

export interface Props extends Common.Globals {
  readonly size?: Size;
  readonly children: React.ReactNode;
  readonly lockScrolling?: boolean;
  readonly scrollingElementRef?: React.Ref<HTMLElement>;
  readonly autoFocus?: boolean;
  readonly onClose?: Common.Event<
    | React.KeyboardEvent<HTMLDivElement>
    | React.SyntheticEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>
  >;
  readonly fixedFooter?: boolean;
  readonly onScroll?: Common.Event<React.UIEvent<HTMLDivElement>>;
  readonly mobileHeader?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly preventOverlayClose?: boolean;
  readonly hasCloseButton?: boolean;
  readonly disableAnimation?: boolean;
  readonly labelClose?: string;
}

export interface Instance {
  getScrollPosition: () => number | null;
  setScrollPosition: (value: number) => void;
  modalBody: React.RefObject<HTMLElement>;
  modalContent: React.RefObject<HTMLElement>;
}
