// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type * as Common from "../common/types";
import type { Props as HeadingProps } from "../Heading/types";

export interface Props extends Common.Globals {
  readonly title: React.ReactNode;
  readonly titleAs?: HeadingProps["as"];
  readonly description?: React.ReactNode;
  readonly renderInPortal?: boolean;
  /**
   * Specifies the maximum width of the Dialog component. This property only affects the display on larger screen sizes and widths greater than 540px.
   */
  readonly maxWidth?: number;
  readonly illustration?: React.ReactNode;
  readonly primaryAction: React.ReactNode;
  readonly secondaryAction?: React.ReactNode;
  readonly lockScrolling?: boolean;
  readonly onClose?: Common.Callback;
  readonly triggerRef?: React.RefObject<HTMLElement | null>;
}
