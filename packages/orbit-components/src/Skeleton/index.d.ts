// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit
import React from "react";

import { ColorTokens } from "../Box";
import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Skeleton";

type Preset = "List" | "Image" | "Card" | "Button" | "Text";

/**  DOCS:
Skeleton component display a placeholder preview before the data gets loaded.

To implement Separator component into your project you'll need to add the import:

```jsx
import Skeleton from "@kiwicom/orbit-components/lib/Skeleton";
```

After adding import into your project you can use it simply like:

```jsx
<Skeleton>
  <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
  <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
  <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
</Skeleton>
```

or if you need to render only rect, you can use the `row` property like:

```jsx
<Skeleton rows={3} rowOffset={15} rowHeight={10} />
```

or you can pick one from our predefined presets:

```jsx
<Skeleton variant="Button" />
```
*/

interface Props extends Common.SpaceAfter, Common.Global {
  /** Turn on or off animation  */
  /** default: true */
  readonly animate?: boolean;
  /** Set animation interval */
  /** default: `0.2`  */
  readonly animationInterval?: number;
  /** Set animation speed  */
  /** default: `2` */
  readonly animationSpeed?: number;
  /** Optional prop for a11y element */
  readonly ariaLabelledby?: string;
  /** Set background-color for svg */
  /** default: `cloudNormal` */
  readonly backgroundColor?: ColorTokens;
  /** Set opacity for background  */
  /** default: `1` */
  readonly backgroundOpacity?: number;
  readonly children?: React.ReactNode;
  /** Set color for foreground rect */
  /** default: `cloudDark` */
  readonly foregroundColor?: ColorTokens;
  /** Set opacity for foreground  */
  /** default: `1` */
  readonly foregroundOpacity?: number;
  /** Set gradientRatio for svg animate element  */
  /** default: `2` */
  readonly gradientRatio?: number;
  /** Set height for Svg element */
  readonly height?: number;
  /** Border-radius for row rect elements */
  /** default: `3` */
  readonly rowBorderRadius?: number;
  /** Set height for rect elements  */
  /** default: `21` */
  readonly rowHeight?: number;
  /** Set offset between rect elements  */
  /** default: `0` */
  readonly rowOffset?: number;
  /** Number of rect elements */
  /** default: `1` */
  readonly rows?: number;
  /** Add text for svg accessible name element  */
  readonly title?: string;
  /** You can pick one of predefined presets  */
  readonly variant?: Preset;
  /** Set viewBox for Svg element */
  readonly viewBox?: string;
  /** Width of Svg element */
  readonly width?: number;
}

declare const Skeleton: React.FunctionComponent<Props>;

export default Skeleton;
