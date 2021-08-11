// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import React from "react";

import { ColorTokens } from "../Box";
import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Skeleton";

type Preset = "List" | "Image" | "Card" | "Button" | "Text";

interface Props extends Common.SpaceAfter, Common.Global {
  readonly animate?: boolean;
  readonly animationInterval?: number;
  readonly animationSpeed?: number;
  readonly ariaLabelledby?: string;
  readonly backgroundColor?: ColorTokens;
  readonly backgroundOpacity?: number;
  readonly children?: React.ReactNode;
  readonly foregroundColor?: ColorTokens;
  readonly foregroundOpacity?: number;
  readonly gradientRatio?: number;
  readonly height?: number;
  readonly rowBorderRadius?: number;
  readonly rowHeight?: number;
  readonly rowOffset?: number;
  readonly rows?: number;
  readonly title?: string;
  readonly variant?: Preset;
  readonly viewBox?: string;
  readonly width?: number;
}

declare const Skeleton: React.FunctionComponent<Props>;
export { Skeleton, Skeleton as default };
