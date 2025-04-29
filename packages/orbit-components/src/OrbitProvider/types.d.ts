// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit

import type * as React from "react";

import type { Theme } from "../defaultTheme";

export interface Props {
  readonly theme: Theme;
  readonly children: React.ReactNode;
}
