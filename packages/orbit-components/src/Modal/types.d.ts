// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";

type Size = "extraSmall" | "small" | "normal" | "large" | "extraLarge";

export type closable =
  | {
      readonly hasCloseButton?: true;
      readonly labelClose: string;
    }
  | {
      readonly hasCloseButton: false;
      readonly labelClose?: string;
    };

export type Props = Common.Globals &
  closable & {
    readonly ref?: React.Ref<Instance>;
    readonly size?: Size;
    readonly children: React.ReactNode;
    readonly triggerRef?: React.RefObject<HTMLElement | null>;
    readonly lockScrolling?: boolean;
    readonly scrollingElementRef?: React.Ref<HTMLElement | null>;
    readonly onClose?: Common.Event<
      | React.KeyboardEvent<HTMLDivElement>
      | React.SyntheticEvent<HTMLButtonElement | HTMLDivElement | HTMLAnchorElement>
    >;
    readonly fixedFooter?: boolean;
    readonly onScroll?: Common.Event<React.UIEvent<HTMLDivElement>>;
    readonly mobileHeader?: boolean;
    readonly isMobileFullPage?: boolean;
    readonly preventOverlayClose?: boolean;
    readonly disableAnimation?: boolean;
    readonly ariaLabel?: string;
    readonly ariaLabelledby?: string;
    readonly ariaDescribedby?: string;
  };

export interface Instance {
  getScrollPosition: () => number | null;
  setScrollPosition: (value: number) => void;
  modalBody: React.RefObject<HTMLElement | null>;
  modalContent: React.RefObject<HTMLElement | null>;
}
