// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import * as React from "react";

declare module "@kiwicom/orbit-components/lib/utils/Slide";

interface Props {
  readonly children: React.ReactNode;
  readonly maxHeight: number | undefined | null;
  readonly expanded?: boolean;
  readonly ariaLabelledBy?: string;
  readonly id?: string;
}

declare const Slide: React.FunctionComponent<Props>;
export { Slide, Slide as default };
