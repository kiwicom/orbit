// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type { Spacing } from "../Stack/types";
import type * as Common from "../common/types";

/** DOCS:implement HorizontalScroll component into your project you'll need to add the import:

  To
  ```jsx
  import HorizontalScroll from "@kiwicom/orbit-components/lib/HorizontalScroll";
  ```

  After adding import into your project you can use it simply like:

  ```jsx
  <HorizontalScroll>
    <FirstComponent />
    <SecondComponent />
    <ThirdComponent />
    ...etc
  </HorizontalScroll>
  ```

*/

export type ScrollSnap = "mandatory" | "proximity" | "inline" | "none";

export type Props = Common.Globals & {
  /** set minimal height */
  readonly minHeight?: number;
  /** prop for testing purposes */
  readonly dataTest?: string;
  /** The spacing between children elements */
  /** default: "300" */
  readonly spacing?: Spacing;
  /** content of HorizontalScroll */
  readonly children: React.ReactNode;
  readonly arrowColor?: string;
  readonly scrollSnap?: ScrollSnap;
  readonly scrollPadding?: number;
  readonly overflowElevation?: boolean;
  readonly elevationColor?: string;
  readonly onOverflow?: () => void;
  /**
   * When arrows is true, arrowLeftAriaLabel and arrowRightAriaLabel are required for accessibility.
   * These labels are used as ARIA labels for the scroll buttons.
   * When arrows is false or undefined, these properties should not be provided.
   */
} & (
    | {
        readonly arrows: true;
        readonly arrowLeftAriaLabel: string;
        readonly arrowRightAriaLabel: string;
      }
    | {
        readonly arrows?: false;
        readonly arrowLeftAriaLabel?: string;
        readonly arrowRightAriaLabel?: string;
      }
  );
