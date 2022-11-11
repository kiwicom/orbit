// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

import * as Common from "../common/types";

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
  readonly mobileHeader?: boolean;
  readonly isMobileFullPage?: boolean;
  readonly preventOverlayClose?: boolean;
  readonly hasCloseButton?: boolean;
  readonly disableAnimation?: boolean;
}

export type Instance = {
  getScrollPosition: () => number | null;
  setScrollPosition: (value: number) => void;
  modalBody: React.RefObject<HTMLElement>;
  modalContent: React.RefObject<HTMLElement>;
};
